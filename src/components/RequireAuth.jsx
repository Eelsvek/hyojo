import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProvider';

export default function RequireAuth({ children }) {
  const user = useContext(AuthContext);
  const location = useLocation();

  console.log('yay', user);
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}
