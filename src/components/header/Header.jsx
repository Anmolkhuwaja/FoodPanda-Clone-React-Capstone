import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Link, Navigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo image.png";
import Menu from "@mui/material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faCircleCheck,
  faHeart,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
  faBagShopping,
  faEllipsisVertical,
  faGlobe,
  faUser,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Schema for Validation
const schema = yup.object({
  username: yup
    .string()
    .min(5, "Min 5 characters")
    .required("Username is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  // Declare state for one & second modal
  const [open, setOpen] = React.useState(false);

  // Handle functions for one modal & second & third
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState(user?.username || "");

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={0} color="error">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={0} color="error">
            <FontAwesomeIcon icon={faBell} />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon icon={faBell} />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  // React Hook Form setup
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Check local storage on component mount
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (savedUser) {
      setUser(savedUser);
    }
  }, []);

  // Save updated user data to localStorage
  const handleSave = () => {
    const updatedUser = { ...user, username };
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setUser(updatedUser);
    setOpen5(false);
  };

  // Handle Signup/Login
  const onSubmit = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setUser(data);
    setOpen2(false);
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setOpen3(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        className="h-[11vh]"
        sx={{ backgroundColor: "#fff", zIndex: 9 }}
      >
        <Toolbar className="container mx-auto">
          <Link to="/">
            <img src={Logo} alt="Logo" className="h-[11vh] ml-4 md:ml-0" />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: { xs: 2, md: 4 },
            }}
          >
            {!user ? (
              <>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Adjust font size for responsiveness
                    textAlign: { xs: "center", md: "left" }, // Center-align text on smaller screens
                  }}
                >
                  You must be logged in to access your profile.
                </Typography>
                <Button
                  onClick={() => setOpen2(true)}
                  variant="outlined"
                  className="transform transition-transform duration-400 hover:scale-105"
                  sx={{
                    color: "#39434d",
                    border: "1px solid #39434d",
                    textTransform: "capitalize",
                    width: { xs: "100%", md: "auto" }, // Full width on mobile
                    padding: { xs: "8px", md: "10px 20px" }, // Adjust padding
                  }}
                >
                  Log in
                </Button>
                <Button
                  onClick={() => setOpen2(true)}
                  variant="outlined"
                  className="transform transition-transform duration-400 hover:scale-105"
                  sx={{
                    color: "#fff",
                    border: "1px solid #e21b70",
                    background: "#e21b70",
                    textTransform: "capitalize",
                    width: { xs: "100%", md: "auto" }, // Full width on mobile
                    padding: { xs: "8px", md: "10px 20px" }, // Adjust padding
                    "&:hover": {
                      backgroundColor: "#9d0a48",
                    },
                  }}
                >
                  Sign up
                </Button>
              </>
            ) : (
              <Box className="flex items-center justify-center">
                <FontAwesomeIcon
                  onClick={() => setOpen3(true)}
                  sx={{ color: "#9d0a48" }}
                  className="text-gray-700 cursor-pointer text-xl"
                  icon={faUser}
                />
                <Typography
                  className="ps-1"
                  onClick={() => setOpen4(true)}
                  sx={{
                    cursor: "pointer",
                    color: "#39434d",
                    fontWeight: "bold",
                  }}
                >
                  {user.username}
                </Typography>
                <FontAwesomeIcon
                  sx={{ color: "#9d0a48" }}
                  className="text-pink-600 cursor-pointer text-2xl ps-1"
                  icon={faAngleDown}
                />
              </Box>
            )}
          </Box>

          {/* Icons */}

          <IconButton
            size="large"
            aria-label="show 4 new mails"
            color="inherit"
            onClick={handleOpen}
            sx={{
              display: { xs: "none", md: "flex" }, // xs and sm hidden, md and larger visible
            }}
          >
            <Badge>
              <FontAwesomeIcon className="text-black" icon={faGlobe} />
              <Typography className="text-black ps-2 pt-1">EN</Typography>
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={0} color="error">
              <FontAwesomeIcon className="text-black" icon={faHeart} />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-haspopup="true"
            color="inherit"
          >
            <FontAwesomeIcon className="text-black" icon={faBagShopping} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: { xs: "flex", md: "none", position: "fixed", zIndex: "9" },
        }}
        className="md:!ml-6 md:!mt-4"
      >
        <IconButton
          size="large"
          aria-label="show more"
          aria-controls={mobileMenuId}
          aria-haspopup="true"
          onClick={handleMobileMenuOpen}
          color="inherit"
          className="!mt-4"
        >
          <FontAwesomeIcon
            className="text-3xl md:text-5xl md:!-ml-4 md:!-mt-1"
            icon={faEllipsisVertical}
          />
        </IconButton>
      </Box>
      {renderMobileMenu}

      {/* Modal 1 */}
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "15%",
            left: "88%",
            transform: "translate(-50%, -50%)",
            width: 130,
            bgcolor: "#f7f7f7",
            boxShadow: 20,
            p: 2,
            borderRadius: "16px",
          }}
          className="flex items-center justify-between"
        >
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            className="text-base text-black"
          >
            English
          </Typography>
          <FontAwesomeIcon
            sx={{ color: "#9d0a48" }}
            className="text-pink-600"
            icon={faCircleCheck}
          />
        </Box>
      </Modal>

      {/* Modal 3: Logout */}
      <Modal open={open3} onClose={() => setOpen3(false)}>
        <Box
          sx={{
            width: 600,
            margin: "200px auto",
            p: 4,
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <Box className="flex items-center justify-between">
            <Typography
              variant="h6"
              sx={{ fontSize: "20px", fontWeight: "700" }}
              className="text-[#333333]"
            >
              Logging out?
            </Typography>
            <FontAwesomeIcon
              onClick={() => setOpen3(false)}
              className="text-[#39434d] cursor-pointer px-3 shadow transition  py-2 text-2xl border text-center rounded-full"
              icon={faXmark}
            />
          </Box>
          <Typography sx={{ fontSize: "16px", marginTop: "35px" }}>
            Thanks for stopping by. See you again soon!
          </Typography>
          <Divider sx={{ my: 3 }} />

          <Box className="justify-end flex">
            <Typography
              className="transform rounded cursor-pointer border transition-transform duration-400 hover:scale-105"
              onClick={() => setOpen3(false)}
              variant="contained"
              sx={{
                paddingX: "15px",
                paddingY: "8px",
                "&:hover": {
                  backgroundColor: "#FDF2F7",
                },
              }}
            >
              Cancel
            </Typography>
            <Typography
              className="transform rounded cursor-pointer transition-transform duration-400 hover:scale-105"
              onClick={handleLogout}
              variant="contained"
              sx={{
                marginLeft: "8px",
                paddingX: "15px",
                paddingY: "8px",
                color: "#fff",
                border: "1px solid #e21b70",
                background: "#e21b70",
                textTransform: "capitalize",
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "#9d0a48",
                },
              }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Modal>

      {/* Modal 4 */}
      <Modal
        keepMounted
        open={open4}
        onClose={() => setOpen4(false)}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "18%",
            left: "82%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "#f7f7f7",
            boxShadow: 10,
            outline: "none",
            p: 2,
            borderRadius: "10px",
          }}
        >
          {/* Profile Section */}
          <Box className="flex items-center justify-start">
            <FontAwesomeIcon className="text-[#39434d] ps-5" icon={faUser} />
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              className="text-base ps-8 text-black cursor-pointer"
              onClick={() => {
                setOpen4(false);
                setOpen5(true);
              }}
            >
              Profile
            </Typography>
          </Box>

          {/* Logout Section */}
          <Box className="flex items-center justify-start mt-5">
            <FontAwesomeIcon
              className="text-[#39434d] ps-5"
              icon={faArrowRightFromBracket}
            />
            <Typography
              id="keep-mounted-modal-title"
              variant="h6"
              className="text-xl ps-8 text-black cursor-pointer"
              onClick={() => {
                setOpen4(false);
                setOpen3(true);
              }}
            >
              Logout
            </Typography>
          </Box>
        </Box>
      </Modal>

      {/* Modal 2: Login/Signup */}
      <Modal open={open2} onClose={() => setOpen2(false)}>
        <Box
          sx={{
            width: 400,
            margin: "50px auto",
            p: 4,
            backgroundColor: "#fff",
            borderRadius: 2,
          }}
        >
          <Typography variant="h6" sx={{ fontSize: "28px", fontWeight: "500" }}>
            Welcome!
          </Typography>
          <Typography sx={{ fontSize: "16px", mt: 2 }}>
            Sign up or log in to continue
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username Field */}
            <Controller
              name="username"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Username"
                  fullWidth
                  sx={{ mt: 2, mb: 2 }}
                  error={!!errors.username}
                  helperText={errors.username?.message}
                />
              )}
            />

            {/* Email Field */}
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />

            {/* Password Field */}
            <Controller
              name="password"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  sx={{ mb: 2 }}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              )}
            />

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "#e21b70",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#9d0a48",
                },
              }}
            >
              Log in
            </Button>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                background: "#fff",
                color: "#39434d",
                marginTop: "6px",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#FDF2F7",
                },
              }}
            >
              Sign up
            </Button>

            <Typography
              sx={{ fontSize: "13px", paddingY: "15px", color: "#4d4d4d" }}
            >
              By signing up, you agree to our{" "}
              <span className=" underline hover:no-underline text-pink-600">
                Terms and Conditions and Privacy Policy.
              </span>
            </Typography>
          </form>
        </Box>
      </Modal>

      {/* Modal 5: Profile */}
      <Modal open={open5} onClose={() => setOpen5(false)}>
        <Box className="!container mx-auto">
          {/* Modal dialog */}
          <Dialog
            open={open5}
            onClose={() => setOpen5(false)}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>My Profile</DialogTitle>
            <DialogContent>
              <Box className="flex flex-col space-y-8 justify-center">
                <TextField
                  size="small"
                  label="Your full name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full"
                  variant="outlined"
                />
                <TextField
                  size="small"
                  label="Your email"
                  value={user?.email || ""}
                  className="w-full"
                  variant="outlined"
                  disabled
                />
              </Box>
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                sx={{
                  background: "#e21b70",
                  textTransform: "capitalize",
                  fontWeight: "500",
                  "&:hover": {
                    backgroundColor: "#9d0a48",
                  },
                }}
                onClick={handleSave}
              >
                Save
              </Button>
              <Typography
                className="transform rounded border cursor-pointer transition-transform duration-400 hover:scale-105"
                onClick={() => setOpen5(false)}
                variant="contained"
                sx={{
                  paddingX: "10px",
                  paddingY: "8px",
                  marginRight: "18px",
                  "&:hover": {
                    backgroundColor: "#FDF2F7",
                  },
                }}
              >
                Cancel
              </Typography>
            </DialogActions>
          </Dialog>
        </Box>
      </Modal>
    </Box>
  );
};

export default Header;
