import {
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Hero from "../../assets/Hero home page.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import RestauratList from "./RestauratList";
import Cities from "./Cities";
import DownloadBanner from "./DownloadBanner";
import BusinessLunchBanner from "./BusinessLunchBanner";
import FAQSection from "./FAQSection";

const Home = () => {
  return (
    <>
      <Box className="bg-[#f7f7f7] lg:min-h-[100vh] md:min-h-[80vh] min-h-[50vh] items-center overflow-hidden">
        <Box className="max-w-[1370px] mx-auto px-0 sm:px-0 lg:px-0">
          <Box className="flex flex-col lg:flex-row items-center lg:items-start">
            {/* Input Section */}
            <Box className="lg:basis-[55%] lg:ps-20 flex flex-col justify-center space-y-6 mb-8 lg:mb-0 mt-10 sm:mt-30 md:mt-30 lg:mt-30">
              <Typography className="!text-[24px] sm:!text-[30px] lg:!text-[40px] !mt-10 sm:!mt-30 lg:!mt-40 !text-[#333333] !font-bold !font-sans leading-tight px-3">
                It's the food and groceries you love, delivered
              </Typography>
              <Box className="bg-white py-4 px-5 rounded-lg shadow-xl flex flex-col sm:flex-row items-center sm:space-x-4 space-y-4 sm:space-y-0">
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Your street and street number"
                  className="w-full"
                  variant="outlined"
                  InputProps={{
                    classes: {
                      input: "placeholder:text-[5px] sm:placeholder:text-[5px]", // Adjust placeholder font size
                    },
                    endAdornment: (
                      <InputAdornment position="end">
                        <FontAwesomeIcon
                          icon={faLocationCrosshairs}
                          className="text-2xl text-pink-700"
                        />
                        <span className="text-base ps-5 font-medium text-slate-700">
                          Locate me
                        </span>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  variant="outlined"
                  className="transform w-full sm:w-32 transition-transform duration-400 hover:scale-105"
                  sx={{
                    color: "#fff",
                    border: "1px solid #e21b70",
                    background: "#e21b70",
                    fontWeight: "600",
                    paddingY: "7px",
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "#9d0a48",
                    },
                  }}
                >
                  Find food
                </Button>
              </Box>
            </Box>

            {/* Image Section */}
            <Box
              className="lg:basis-[45%] flex justify-start lg:items-end lg:h-[calc(100vh-2rem)] relative overflow-hidden"
              sx={{
                position: "relative",
              }}
            >
              {/* Image for Large Screens */}
              <img
                src={Hero}
                className="hidden lg:block w-auto max-w-[100%] sm:max-w-[120%] lg:max-w-[180%] h-auto lg:h-full lg:w-auto object-cover lg:object-contain"
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  marginLeft: "45px",
                }}
                alt="Hero image"
              />

              {/* Image for Mobile and Tablet Screens */}
              <img
                src={Hero}
                className="block lg:hidden w-full h-auto object-cover ml-8 sm:ml-15 md:ml-20"
                alt="Hero image for mobile and tablet"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <RestauratList />
      <Cities />
      <DownloadBanner />
      <BusinessLunchBanner />
      <FAQSection />
    </>
  );
};

export default Home;
