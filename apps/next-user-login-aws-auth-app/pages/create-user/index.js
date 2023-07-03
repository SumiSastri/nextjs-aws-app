import { useState } from "react";
import { Auth } from "@aws-amplify/auth";
import { API } from "@aws-amplify/api";
import { Form } from "react-bootstrap";

import { createUser } from "../../src/graphql/mutations";
import NavBar from "../../components/NavBar";

const CreateUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");

  const submitNewUserDetails = async (event) => {
    event.preventDefault();
    // const currentUser = await Auth.currentAuthenticatedUser();
    // console.log(currentUser, "current user");
    try {
      const userPayload = await API.graphql({
        query: createUser,
        variables: {
          input: {
            // id: currentUser.attributes.sub,
            firstName,
            lastName,
            description,
          },
        },
      });
      console.log(userPayload, "SUCCESS: User payload created");
    } catch (error) {
      console.log(error, "Oops - check user payload");
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100'>
      <NavBar />
      <h4 className='align-self-center'>Create a user</h4>
      <Form className='w-50 align-self-center' onSubmit={submitNewUserDetails}>
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
          Add user
        </button>
      </Form>
    </div>
  );
};
export default CreateUser;
