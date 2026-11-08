/* AuthLayout – wraps authentication pages */
import React from 'react';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => (
  <div className="container mt-md">
    <Outlet />
  </div>
);

export default AuthLayout;
