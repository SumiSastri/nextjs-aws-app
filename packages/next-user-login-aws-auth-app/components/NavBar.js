import React from "react";
import Link from "next/link";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "@aws-amplify/ui-react";

const NavBar = () => {
  // CALL BACK FOR SIGN OUT BUTTON
  const handleSignOutSubmit = async () => {
    try {
      await Auth.signOut();
      console.log(Auth.signOut, "SUCCESS: SIGN OUT");
    } catch (error) {
      console.log(error, "OOPS - SIGN OUT ERROR");
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
            <Link href='/about' className='nav-link'>
              About
            </Link>
            <li className='nav-item'>
              <Link href='/create-user' className='nav-link'>
                Create User
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='/edit-user' className='nav-link'>
                Edit User
              </Link>
            </li>

            <li className='nav-item'>
              <Link href='/delete-user' className='nav-link'>
                Delete User
              </Link>
            </li>

            <button
              className='btn btn-danger'
              type='button'
              onClick={handleSignOutSubmit}
            >
              Sign Out
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
// export default NavBar;
export default withAuthenticator(NavBar);
