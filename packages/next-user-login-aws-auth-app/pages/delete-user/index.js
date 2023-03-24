import { useState } from "react";
import { Auth } from "@aws-amplify/auth";
import { API } from "@aws-amplify/api";
import { Form } from "react-bootstrap";
import { withSSRContext } from "aws-amplify";
import { getUser } from "../../src/graphql/queries";
import { deleteUser } from "../../src/graphql/mutations";
import NavBar from "../../components/NavBar";

export async function getServerSideProps({ req, res }) {
  const { Auth, API } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    // console.log(user, "USER details");
    const response = await API.graphql({
      query: getUser,
      variables: { id: user.attributes.sub },
    });

    if (response.data.getUser) {
      return {
        props: {
          mode: "DELETE",
          user: response.data.getUser,
          error: false,
        },
      };
    }
  } catch (error) {
    console.log(error, "OOPs! No authenticated user in your response body");
  }
  return {
    props: {
      error: true,
    },
  };
}

const DeleteUser = ({ error, mode, user }) => {
  const [firstName] = useState(mode === "DELETE" ? user.firstName : "");
  const [lastName] = useState(mode === "DELETE" ? user.lastName : "");
  const [description] = useState(mode === "DELETE" ? user.description : "");

  const handleDeleteUser = async (event) => {
    event.preventDefault();

    const currentUser = await Auth.currentAuthenticatedUser();
    // console.log(currentUser, "current user");
    try {
      const removeUser = await API.graphql({
        query: mode === "DELETE" ? deleteUser : updateUser,
        variables: {
          input: {
            id: currentUser.attributes.sub,
          },
        },
      });
      console.log(removeUser, "DANGER: user data DELETED");
      window.location.heref = "/";
    } catch (error) {
      console.log(error, "Hmmm check payload details");
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100'>
      <NavBar />
      <h4 className='align-self-center'>Delete this user</h4>
      <Form className='w-50 align-self-center' onSubmit={handleDeleteUser}>
        <p className='mt-2'>{firstName}</p>
        <p className='mt-2'>{lastName}</p>
        <p className='mt-2'>{description}</p>
        <br />
        <button className='mt-3 btn btn-danger' type='submit'>
          Delete user
        </button>
      </Form>
    </div>
  );
};
export default DeleteUser;
