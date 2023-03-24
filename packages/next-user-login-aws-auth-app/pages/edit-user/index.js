import { useState } from "react";
import { Auth } from "@aws-amplify/auth";
import { API } from "@aws-amplify/api";
import { withSSRContext } from "aws-amplify";
import { Form } from "react-bootstrap";

//graphQL
import { getUser } from "../../src/graphql/queries";
import { createUser, updateUser } from "../../src/graphql/mutations";

// components
import NavBar from "../../components/NavBar";

export async function getServerSideProps({ req, res }) {
  const { Auth, API } = withSSRContext({ req });
  try {
    const user = await Auth.currentAuthenticatedUser();
    const response = await API.graphql({
      query: getUser,
      variables: { id: user.attributes.sub },
    });

    if (response.data.getUser) {
      return {
        props: {
          mode: "EDIT",
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

const EditUser = ({ error, mode, user }) => {
  const [firstName, setFirstName] = useState(
    mode === "EDIT" ? user.firstName : ""
  );
  const [lastName, setLastName] = useState(
    mode === "EDIT" ? user.lastName : ""
  );
  const [description, setDescription] = useState(
    mode === "EDIT" ? user.description : ""
  );

  const handleEditUserSubmission = async (event) => {
    const currentUser = await Auth.currentAuthenticatedUser();
    event.preventDefault();
    try {
      const editUser = await API.graphql({
        query: mode === "EDIT" ? updateUser : createUser,
        variables: {
          input: {
            id: currentUser.attributes.sub,
            firstName,
            lastName,
            description,
          },
        },
      });
      console.log(editUser, "SUCCESS: user data editied");
      window.location.heref = "/";
    } catch (error) {
      console.log(error, "FAIL: user data not edited");
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100'>
      <NavBar />
      <h4 className='align-self-center'>
        Please use this form to edit user details
      </h4>
      <Form
        className='w-50 align-self-center'
        onSubmit={handleEditUserSubmission}
      >
        <p className='mt-2'> First Name</p>
        <input
          type='text'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <p className='mt-2'>Family Name</p>
        <input
          type='text'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <p className='mt-2'>Short Description</p>
        <textarea
          type='textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className='mt-3 btn btn-primary' type='submit'>
          Update
        </button>
      </Form>
    </div>
  );
};
export default EditUser;
