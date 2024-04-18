import React from 'react';

import useLogout from '../../../hooks/useLogout';
import { useAuthContext } from '../../context/AuthContext';
import "./Page1.css"

import {Link} from "react-router-dom"
const Page1 = () => {

    const { loading, logout } = useLogout();
    const {authUser}=useAuthContext();

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
      <>
    <div className="wrapper">
      <h1>Welcome to Page 1, {authUser.fullName}</h1>
      {/*<div className="flex justify-center gap-5">*/}
      <button className="logout-button" onClick={logout}>
        Logout
      </button>
    <div></div>
      <Link to ={"/secondpage"} >
        Page 2
      </Link>
      {/*</div>*/}

    </div>
      </>
  );
};

export default Page1;
