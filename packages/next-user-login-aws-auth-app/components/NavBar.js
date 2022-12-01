import React from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Navbar = () => {
  // CALL BACK FOR SIGN OUT BUTTON
  const signOutHandler = async () => {
    try {
      await Auth.signOut();
    } catch (error) {
      console.log(error, "FAIL: SIGN OUT FAILED");
    }
  };

  return (
    <nav className='navbar w-100 navbar-expand navbar-dark bg-dark mb-4'>
      <div className='container'>
        <Link className='navbar-brand' href='#'>
          Auth users with AWS
        </Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link href='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/edit-user' className='nav-link'>
                Edit User
              </Link>
            </li>

            <button
              className='btn btn-danger'
              type='button'
              onClick={signOutHandler}
            >
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withAuthenticator(Navbar);
