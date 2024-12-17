import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')) || {});
  const [username, setUsername] = useState(user.username || '');
  const [email, setEmail] = useState(user.email || '');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setEmail(user.email);
    }
  }, [user]);

  const handleSave = () => {
    const updatedUser = { ...user, username, email };
    localStorage.setItem('user', JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <>
       <Box className='!container mx-auto'>
      <Box className="lg:ms-80 lg:mt-28">
        <Box className='flex items-center !w-[65%] mb-5'>
          <Typography className='!text-2xl !justify-start'>My profile</Typography>
        </Box> 
        <Box className='flex flex-col space-y-8 justify-center'>
          <TextField
            size="small"
            label="Your full name"
            className="w-2/3"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            size="small"
            label="Your email"
            className="w-2/3"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant="contained"
            sx={{
              background: "#e21b70",
              textTransform: "capitalize",
              fontWeight:'500',
              width:'100px',
              "&:hover": {
                backgroundColor: "#9d0a48",
              },
            }}
            onClick={handleSave}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
    </>
  )
}

export default Profile