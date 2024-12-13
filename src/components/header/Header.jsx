import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Logo from "../../assets/Logo image.png";
import Menu from "@mui/material/Menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCircleCheck, faHeart } from "@fortawesome/free-regular-svg-icons";
import { faBagShopping, faEllipsisVertical, faGlobe, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button, Modal, TextField, Typography } from "@mui/material";

// Style for the first modal
const style = {
    position: 'absolute',
    top: '15%',
    left: '88%',
    transform: 'translate(-50%, -50%)',
    width: 130,
    bgcolor: '#f7f7f7',
    boxShadow: 20,
    p: 2,
    borderRadius: '16px',
  };

  // Style for the second modal
const signUpLoginUpStyle = {
  position: "absolute",
  top: "48%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 380,
  height: 500,
  bgcolor: "#f7f7f7",
  boxShadow: 20,
  p: 4,
  borderRadius: "16px",
};

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

      // Declare state for one & second modal
     const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    // Handle functions for one modal & second
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);

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

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="static"
          className="h-[11vh]"
          sx={{ backgroundColor: "#fff" }}
        >
          <Toolbar className="container mx-auto">
            <img src={Logo} alt="Logo" className="h-[11vh]" />

            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <Box className='flex items-center px-2'>
              <Button
                onClick={handleOpen2}
                variant="outlined"
                size="small"
                sx={{
                  color: "#39434d",
                  border: "1px solid #39434d",
                   textTransform: "Capitalize",
                   fontSize:'18px',
                  "&:hover": {
                    backgroundColor: "#e7eaf1",
                  },
                }}
               className="h-10 transform transition-transform duration-400 hover:scale-105"
              >
                Log in
              </Button>
             
              <Button
               onClick={handleOpen2}
                variant="outlined"
                size="small"
                sx={{
                  color: "#fff",
                  border: "1px solid #e21b70",
                  background:"#e21b70",
                   textTransform: "capitalize",
                   marginLeft:'25px',
                   fontSize:'18px',
                  "&:hover": {
                    backgroundColor: '#9d0a48',
                  },
                }}
                 className="h-10 transform transition-transform duration-400 hover:scale-105"
              >
                Sign in
              </Button>
              </Box>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
                onClick={handleOpen}
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
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                sx={{color:'black'}}
              >
                <FontAwesomeIcon icon={faEllipsisVertical}/>
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}

        {/* Modal 1 */}
        <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} className='flex items-center justify-between'>
          <Typography id="keep-mounted-modal-title" variant="h6" className="text-base text-black">
            English
          </Typography>
          <FontAwesomeIcon sx={{color:'#9d0a48'}} className="text-pink-600" icon={faCircleCheck} />
        </Box>
      </Modal>

      {/* Modal 2 */}
      <Modal
        keepMounted
        open={open2}
        onClose={handleClose2}
        aria-labelledby="second-modal-title"
        aria-describedby="second-modal-description"
      >
        <Box sx={signUpLoginUpStyle}>
          <Box className="flex items-center justify-between">
            <Typography
              id="second-modal-title"
              sx={{ fontSize: "28px", fontWeight: "500" }}
              variant="h6"
              className="text-black"
            >
              Welcome!
            </Typography>
            {/* Close Icon */}
            <FontAwesomeIcon
              sx={{ color: "#e21b70" }}
              className="text-pink-600 text-xl cursor-pointer"
              icon={faXmark}
              onClick={handleClose2}
            />
          </Box>

          <Typography
            id="second-modal-description"
            sx={{ fontSize: "16px", marginTop: "16px" }}
            className="text-zinc-700"
          >
            Sign up or log in to continue
          </Typography>

          <TextField
              label="Username"
              fullWidth
              variant="outlined"
              sx={{ mt: 2, mb:2 }}
            />

             {/* Email Field */}
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />

          {/* Password Field */}
          <TextField
            label="Password"
            type="password"
            fullWidth
            variant="outlined"
            sx={{ mb: 2 }}
          />

                <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#39434d",
                  border: "1px solid #39434d",
                   textTransform: "Capitalize",
                   fontSize:'18px',
                  "&:hover": {
                    backgroundColor: "#eddee5",
                    border:'none',
                  },
                }}
               className="h-10 w-80 transform transition-transform duration-400"
              >
                Log in
              </Button>
             
              <Button
                variant="outlined"
                size="small"
                sx={{
                  color: "#fff",
                  border: "1px solid #e21b70",
                  background:"#e21b70",
                   textTransform: "capitalize",
                   fontSize:'18px',
                   marginTop:'10px',
                  "&:hover": {
                    backgroundColor: '#9d0a48',
                  },
                }}
                 className="h-10 w-80 transform transition-transform duration-400"
              >
                Sign in
              </Button>
        </Box>
      </Modal>

      </Box>
    </>
  );
};

export default Header;
