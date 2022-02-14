import React from 'react';
import { Outlet } from 'react-router-dom';

function CreateAccountLayout() {
  return (
    <>
      <h1>Create Account</h1>
      <Outlet />
    </>
  );
}

export default CreateAccountLayout;
