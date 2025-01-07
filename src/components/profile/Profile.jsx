import {
  Container,
  Box,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../slices/userSlice";

// Validation schema with Yup
const schema = yup
  .object({
    username: yup
      .string()
      .required("Username is required")
      .min(3, "Username should have at least 3 characters")
      .matches(/^[A-Za-z]+$/, "Username should only contain letters"),
  })
  .required();

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      username: user.username || "",
    },
  });

  const onSubmit = (data) => {
    const updatedUser = { ...user, username: data.username };
    dispatch(setUser(updatedUser));
    localStorage.setItem("user", JSON.stringify(updatedUser));
  };

  return (
    <Container maxWidth="md" className="!mt-32">
      {user.username ? (
        <Box className="profile-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant="h5">My Profile</Typography>
            <Grid container className="!mt-2" spacing={2}>
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
                      helperText={
                        errors.username ? errors.username.message : ""
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item className="!mt-2" xs={12}>
                <TextField
                  label="Email Address"
                  fullWidth
                  value={user.email}
                  disabled
                />
              </Grid>
            </Grid>
            <Box textAlign="start" mt={4}>
              <Button
                type="submit"
                variant="contained"
                className="!bg-pink-700"
              >
                Save
              </Button>
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
