import React from 'react';
import { Outlet } from 'react-router-dom';

function AccountLayout() {
  return (
    <>
      <h1>Account</h1>
      <Outlet />
    </>
  );
}

export default AccountLayout;
