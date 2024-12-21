import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
  FormHelperText,
} from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

// Validation schema with Yup
const schema = yup.object({
  username: yup.string().required('Username is required').min(3, 'Username should have at least 3 characters'),
}).required();

const Profile = () => {
  const [user, setUser] = useState(null);

  // Fetch user data from localStorage
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: user ? user.username : '',
    },
  });

  const onSubmit = (data) => {
    const updatedUser = { ...user, username: data.username };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
  };

  return (
    <Container maxWidth="md" className="mt-52">
      {user ? (
        <Box className="profile-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5">My Profile</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Controller
                  name="username"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Username"
                      fullWidth
                      error={!!errors.username}
                      helperText={errors.username ? errors.username.message : ''}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  fullWidth
                  value={user.email}
                  disabled
                />
              </Grid>
            </Grid>
            <Box textAlign="start" mt={4}>
              <Button type="submit" variant="contained">Save</Button>
            </Box>
          </form>
        </Box>
      ) : (
        <Typography>You need to log in to access this page.</Typography>
      )}
    </Container>
  );
};

export default Profile;
