import { Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user.username) {
    return <Typography className='!mt-20'>You don't have access</Typography>;
  }

  return children;
};

export default ProtectedRoute;
