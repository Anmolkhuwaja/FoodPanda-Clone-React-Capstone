import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faSignOutAlt,
  faUserCheck,
  faUserEdit,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const MobileDrawer = (props) => {
  const {
    open,
    toggleDrawer,
    user,
    setOpen2,
    setOpen3,
    setOpen4,
    setOpen5,
    handleLogout,
  } = props;

  return (
    <>
      <div>
        <Drawer open={open} onClose={toggleDrawer(false)}>
          <Box
            sx={{ width: 320 }}
            role="presentation"
            onClick={toggleDrawer(false)}
          >
            <Typography
              variant="h4"
              className="text-[#39434d] w-16 !ms-60 !mt-2 bg-white cursor-pointer px-3 shadow  py-2 text-2xl border text-center text-[#575a5d] border border-[#91969b] transition-transform duration-200 ease-in-out 
              hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full"
            >
              <FontAwesomeIcon
                onClick={toggleDrawer(false)}
                icon={faXmark}
              ></FontAwesomeIcon>
            </Typography>

            <Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  gap: 2,
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                {!user ? (
                  <>
                    <Box className="flex items-center justify-start mt-8 group relative">
                      <span className="absolute inset-0 mx-2 -ms-3 rounded-xl bg-[#ecdde4] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                      <div className="flex items-center relative z-10">
                        <FontAwesomeIcon
                          className="text-black"
                          icon={faEdit}
                        />
                        <button
                          onClick={() => setOpen2(true)}
                          className="text-black text-xl !p-3 capitalize rounded-md"
                        >
                          Sign up
                        </button>
                      </div>
                    </Box>
                  </>
                ) : (
                  <Box className="flex items-center justify-start mt-8 group relative">
                    <span className="absolute inset-0 mx-2 -ms-3 rounded-xl bg-[#ecdde4] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                    <div className="flex items-center  relative z-10 ">
                      <FontAwesomeIcon
                        onClick={() => setOpen3(true)}
                        sx={{ color: "#9d0a48" }}
                        className="text-black cursor-pointer text-base"
                        icon={faUserCheck}
                      />
                      <Typography
                        className="!text-lg !p-3 text-black"
                        sx={{
                          cursor: "pointer",
                          color: "#000",
                          fontWeight: "medium",
                        }}
                      >
                        {user.username}
                      </Typography>
                    </div>
                  </Box>
                )}
              </Box>

              <Box className="flex items-center justify-start mt-4 group relative">
                <span className="absolute inset-0 rounded-xl mx-2 bg-[#ecdde4] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <FontAwesomeIcon
                  className="text-black ps-5 relative z-10"
                  icon={faUserEdit}
                />
                <Typography
                  variant="h6"
                  className="!text-xl ps-8 text-black !p-3 cursor-pointer relative z-10"
                  onClick={() => {
                    setOpen4(false);
                    setOpen5(true);
                  }}
                >
                  Profile
                </Typography>
              </Box>

              {/* Logout Section */}
              <Box className="flex items-center justify-start mt-5 group relative">
                <span className="absolute p-4 rounded-xl mx-2 inset-0 bg-[#ecdde4] opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
                <FontAwesomeIcon
                  className="text-black ps-5 relative z-10"
                  icon={faSignOutAlt}
                />
                <Typography
                  id="keep-mounted-modal-title"
                  variant="h6"
                  className="!text-xl ps-8 text-black !p-3 cursor-pointer relative z-10"
                  onClick={handleLogout}
                >
                  Logout
                </Typography>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </div>
    </>
  );
};

export default MobileDrawer;
