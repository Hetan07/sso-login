import React from 'react';

import useLogout from '../../../hooks/useLogout';

import { useAuthContext } from '../../context/AuthContext';

import { Link } from 'react-router-dom';

const Page2 = () => {
    const {authUser} = useAuthContext();
    const { loading, logout } = useLogout();

  const handleLogout = () => {
    // Handle logout logic here
  };

  return (
      <>
    <div className="wrapper">
      <h1 >Welcome to Page 2, {authUser.fullName}</h1>
        <div>
            <button className="logout-button" onClick={logout}>
                Logout
            </button>
            <div></div>
            <Link to={"/"}>
                Page 1
            </Link>
        </div>
    </div>
      </>
  );
};

export default Page2;
