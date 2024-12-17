import { Typography } from '@mui/material';
import React from 'react';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  // If user is not logged in, redirect to login page
  if (!user) {
    return <Typography>You don't have access</Typography>;
  }

  return children;
};

export default ProtectedRoute;
