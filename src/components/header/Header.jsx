import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Logo from "../../assets/Logo image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import {
  faCircleCheck,
  faHeart,
  faTrashAlt,
} from "@fortawesome/free-regular-svg-icons";
import {
  faAngleDown,
  faArrowRightFromBracket,
  faBagShopping,
  faGlobe,
  faMinus,
  faPlus,
  faUser,
  faUserCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Divider,
  Drawer,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import { clearUser, setUser } from "../../slices/userSlice";
import * as yup from "yup";
import MobileDrawer from "./MobileDrawer";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  addToCart,
} from "../../slices/cartSlice";

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
  // Declare state for one & second modal
  const [open, setOpen] = React.useState(false);

  // Handle functions for one modal & second & third
  const handleOpen = () => setOpen(true);
  const [drawer, setDrawer] = useState(false);
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const totalItems = useSelector((state) => state.cart.totalItems);
  const favoritesCount = useSelector((state) => state.favorites.items.length);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);

  const toggleDrawer = (newOpen) => () => {
    setDrawer(newOpen);
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Check for user in localStorage on page load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData));
    dispatch(setUser({ username: formData.username, email: formData.email }));
    setOpen2(false);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    setUser(null);
    setOpen3(false);
  };

  const toggleDrawer2 = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsDrawerOpen(open);
  };

  // const handleToggleDrawer = () => {
  //   setIsDrawerOpen(!isDrawerOpen);
  // };

  const handleIncrement = (id) => {
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <Box sx={{ flexGrow: 2 }}>
      <AppBar
        position="fixed"
        className="h-[10vh]"
        sx={{ backgroundColor: "#fff", zIndex: 20 }}
      >
        <Toolbar className="container mx-auto">
          <Link to="/">
            <img
              src={Logo}
              alt="Logo"
              className="md:h-[10vh] h-[8vh] ml-14 md:!mt-0 !mt-2 items-center md:ml-7"
            />
          </Link>

          <Box sx={{ flexGrow: 1 }} />

          {/* Buttons and username */}
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: { xs: "row", md: "row" },
              gap: { xs: 1, md: 1 },
            }}
          >
            {!user.username ? (
              <>
                <Typography
                  sx={{
                    fontSize: { xs: "12px", sm: "14px", md: "16px" },
                    textAlign: { xs: "center", md: "left" },
                  }}
                ></Typography>

                <button
                  onClick={() => setOpen2(true)}
                  className="transform transition-transform duration-400 hover:scale-105 
           text-[#39434d] border font-medium border-[#39434d] 
           capitalize text-base 
           px-3 py-1 rounded-lg"
                >
                  Log in
                </button>

                <button
                  onClick={() => setOpen2(true)}
                  className="transform transition-transform ms-4 mr-4 duration-400 hover:scale-105 
              text-white bg-[#e21b70] border border-[#e21b70] 
              capitalize  rounded-lg font-medium py-1 px-3 
              hover:bg-[#9d0a48]"
                >
                  Sign up
                </button>
              </>
            ) : (
              <Box className="flex items-center justify-center">
                <FontAwesomeIcon
                  onClick={() => setOpen3(true)}
                  sx={{ color: "#9d0a48" }}
                  className="text-gray-700 cursor-pointer text-xl"
                  icon={faUserCheck}
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

          <Link to="/favorites">
            <IconButton
              size="large"
              aria-label="show favorite items"
              color="inherit"
            >
              <Badge
                badgeContent={favoritesCount}
                color="error"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#E21B70",
                    color: "white",
                  },
                }}
              >
                <FontAwesomeIcon className="text-black" icon={faHeart} />
              </Badge>
            </IconButton>
          </Link>

          <IconButton
            size="large"
            edge="end"
            aria-label="cart"
            color="inherit"
            style={{ position: "relative" }}
            onClick={toggleDrawer2(true)} // Open the drawer
          >
            <Badge
              badgeContent={cart.totalItems}
              color="primary"
              sx={{
                "& .MuiBadge-badge": {
                  backgroundColor: "#E21B70",
                  color: "white",
                },
              }}
            >
              <FontAwesomeIcon className="text-black" icon={faBagShopping} />
            </Badge>
          </IconButton>

          <Drawer
            anchor="right"
            open={isDrawerOpen}
            onClose={toggleDrawer2(false)}
          >
            <Box
              className="w-full h-[100vh] bg-gray-50 shadow-lg rounded-lg p-4 flex flex-col"
              role="presentation"
            >
              {cart.cartItems.length === 0 ? (
                <div
                  id="cart-empty"
                  className="text-center !py-4 flex-grow flex flex-col justify-center"
                >
                  <img
                    src="https://foodpanda.dhmedia.io/image/bento/production/web/fp/empty-state/illu_cart_empty.svg"
                    alt="Empty Cart Image"
                    className="mx-auto mb-4 w-24 h-24 object-contain"
                  />
                  <Typography className="text-gray-700 !font-bold !text-2xl !mb-3">
                    Hungry?
                  </Typography>
                  <Typography className="text-gray-500 px-4 !text-lg mb-4">
                    You haven't added anything to your cart!
                  </Typography>
                  <Box className="mt-80">
                    <Box className="mb-1 flex justify-between items-center">
                      <Typography className="font-bold text-gray-800">
                        <span className="!font-bold">Total</span> (incl. fees
                        and tax)
                      </Typography>
                      <Typography className="text-lg !font-bold text-pink-600">
                        Rs: {cart.totalPrice}
                      </Typography>
                    </Box>
                    <button
                      className={`!bg-pink-600 w-full text-white px-6 py-2 rounded-lg shadow-md font-medium transition-all duration-300 ${
                        cart.cartItems.length === 0
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-pink-800"
                      }`}
                      disabled={cart.cartItems.length === 0}
                    >
                      <Link to={cart.cartItems.length > 0 ? "/order" : "#"}>
                        Review payment and address
                      </Link>
                    </button>
                  </Box>
                </div>
              ) : (
                <>
                  <div id="cart-items" className="overflow-y-auto flex-grow">
                    {cart.cartItems.map((item) => (
                      <div key={item.id} className="mb-4">
                        <Box className="flex items-start justify-start p-4">
                          <img
                            className="w-16"
                            src={item.image}
                            alt={item.name}
                          />
                          <p className="text-gray-800 font-medium ps-2">
                            {item.name}
                          </p>
                        </Box>
                        <div className="flex items-center justify-start !font-medium space-x-2">
                          <p className="text-sm text-gray-500 ps-4">
                            {`Rs. ${item.totalPrice}`}
                          </p>
                          <div className="flex items-center mt-2 ps-4 !bg-gray-50 rounded-lg">
                            <div className="flex items-center px-2 border border-gray-400 !justify-center space-x-2 bg-white rounded-3xl">
                              <button
                                onClick={() => handleDecrement(item.id)}
                                className="bg-white p-1 !text-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <span className="bg-white p-1 !text-md rounded-lg mx-2">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => handleIncrement(item.id)}
                                className="bg-white rounded-lg !text-md p-1 transition duration-300 ease-in-out transform hover:scale-105"
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                            <button
                              onClick={() => handleRemove(item.id)}
                              className="bg-white border ms-4 border-gray-300 px-2 py-1 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                            >
                              <FontAwesomeIcon icon={faTrashAlt} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Box
                    id="cart-footer"
                    className="border-t border-gray-300 pt-4"
                  >
                    <Box className="mb-4 flex justify-between items-center">
                      <Typography className="font-bold text-gray-800">
                        <span className="!font-bold">Total</span> (incl. fees
                        and tax)
                      </Typography>
                      <Typography className="text-lg !font-bold text-pink-600">
                        Rs: {cart.totalPrice}
                      </Typography>
                    </Box>
                    <button className="!bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md font-medium transition-all duration-300 hover:bg-pink-800 w-full">
                      <Link to="/order">Review payment and address</Link>
                    </button>
                  </Box>
                </>
              )}
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          position: "fixed",
          zIndex: 1000,
          left: 10,
        }}
        className="!ml-1 !mt-4 md:!mt-8"
      >
        <IconButton
          size="large"
          aria-label="show more"
          aria-haspopup="true"
          color="inherit"
        >
          <FontAwesomeIcon
            className="!text-2xl md:!text-4xl ml-2 z-10"
            onClick={toggleDrawer(true)}
            icon={faUser}
          />
          <MobileDrawer
            open={drawer}
            toggleDrawer={toggleDrawer}
            user={user}
            setOpen2={setOpen2}
            setOpen3={setOpen3}
            faUser={faUser}
            setOpen4={setOpen4}
            faAngleDown={faAngleDown}
            handleLogout={handleLogout}
            // setOpen5={setOpen5}
            faArrowRightFromBracket={faArrowRightFromBracket}
          />
        </IconButton>
      </Box>
      {/* {renderMobileMenu} */}

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
                // setOpen3(true);
              }}
            >
              <Link to="/profile">Profile</Link>
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

          <form onSubmit={handleSubmit}>
            <TextField
              name="username"
              label="Username"
              fullWidth
              sx={{ mt: 2, mb: 2 }}
              value={formData.username}
              onChange={handleChange}
              required
            />
            <TextField
              name="email"
              label="Email"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              sx={{ mb: 2 }}
              value={formData.password}
              onChange={handleChange}
              required
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
    </Box>
  );
};

export default Header;
