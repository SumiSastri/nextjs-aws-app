import NavBar from "../components/NavBar";
import { useState } from "react";
import { API, Auth } from "aws-amplify";

export default function EditUser({ Component, pageProps }) {
  const [firstName, setFirstName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [description, setDescription] = useState("");

  const handleEditUserSubmission = async (event) => {
    const currentUser = await Auth.currentAuthenticatedUser;
    event.preventDefault();

    try {
      const result = await API.graphql({
        // query: createUser,
        variables: {
          input: {
            id: currentUser.attributes.sub,
            firstName: firstName,
            familyName: familyName,
            description: description,
          },
        },
      });
      console.log(result, "SUCCESS: edit user data submitted");
    } catch (error) {
      console.log(error, "FAIL: edit user fail submission");
    }
  };

  return (
    <div className='d-flex flex-column justify-content-center w-100 h-100'>
      <NavBar />
      <h4 className='align-self-center'>
        Please use this form to edit user details
      </h4>
      <form
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
          value={familyName}
          onChange={(e) => setFamilyName(e.target.value)}
        />
        <p className='mt-2'>Short Description</p>
        <input
          type='textarea'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <br />
        <button className='mt-3 btn btn-primary' type='submit'>
          Update
        </button>
      </form>
    </div>
  );
}
