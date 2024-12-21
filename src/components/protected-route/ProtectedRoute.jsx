import { Typography } from '@mui/material';
import React from 'react';

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  // If the user is not logged in, redirect to login page
  if (!user) {
    return <Typography className='!mt-20'>You don't have access</Typography>;
  }

  // If the user is logged in, show the children (protected content)
  return children;
};

export default ProtectedRoute;
