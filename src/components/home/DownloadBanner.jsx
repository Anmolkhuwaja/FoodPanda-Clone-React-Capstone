import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MobileApps from "../../assets/foodpanda-Apps.webp";
import QR from "../../assets/QR Code.png";
import Apple from "../../assets/Applee.png";
import Google from "../../assets/google-play.png";
import GallerySVG from "../../assets/gallery.svg";

const DownloadBanner = () => {
  return (
    <>
      <Typography className="!text-[24px] sm:!text-[30px] lg:!text-[30px] !mt-10 sm:!mt-30 lg:!mt-30 !text-[#333333] !font-bold !font-sans leading-tight px-3 lg:pl-24">
        Put us in your pocket
      </Typography>

      <Box className="mt-[3%] h-[50vh] lg:px-16">
        <Box className="w-full lg:h-full md:h-[58vh] bg-[#E21B70] rounded-[16px] relative flex flex-col lg:flex-row lg:items-center">
          {/* Left Section */}
          <Box className="text-white p-4 lg:w-[80%]">
            <Typography variant="h6" className="!font-medium">
              Download the food and groceries you love
            </Typography>
            <Box className="flex items-center  md:mt-5">
              <img
                src={QR}
                alt=""
                className="w-[15%] lg:w-[20%] border p-1 rounded-md"
              />
              <Typography variant="body1" className="mt-4 ps-6">
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </Typography>
            </Box>

            <Box className="flex items-center justify-center mt-6 gap-4">
              {/* App Store Button */}
              <Box className="flex bg-black w-[180px] md:w-[200px] lg:w-[50%] items-center border border-[white] rounded-md p-1">
                <img
                  src={Apple}
                  className="w-[20%] rounded-2xl filter brightness-0 invert"
                  alt=""
                />
                <Box>
                  <Typography className="!text-[8px] md:!text-[10px] ps-2">
                    Download on the
                  </Typography>
                  <Typography className="!text-[14px] md:!text-[18px] ps-2">
                    App Store
                  </Typography>
                </Box>
              </Box>

              {/* Google Play Button */}
              <Box className="flex bg-black w-[180px] md:w-[200px] lg:w-[50%] items-center border border-[white] rounded-md p-1">
                <img src={Google} className="w-[20%] rounded-md" alt="" />
                <Box>
                  <Typography className="!text-[8px] md:!text-[10px] ps-2">
                    GET IT ON
                  </Typography>
                  <Typography className="!text-[12px] md:!text-[18px]">
                    Google Play
                  </Typography>
                </Box>
              </Box>

              {/* AppGallery Button */}
              <Box className="flex bg-black w-[180px] md:w-[200px] lg:w-[50%] items-center border border-[white] rounded-md p-1">
                <img
                  src={GallerySVG}
                  alt="Gallery"
                  className="w-[22%] rounded-md"
                />

                <Box>
                  <Typography className="!text-[8px] md:!text-[10px]">
                    EXPLORE IT ON
                  </Typography>
                  <Typography className="!text-[14px] md:!text-[18px]">
                    AppGallery
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Right Section */}
          <Box className="relative lg:static top-0 right-[5%] h-full flex items-center justify-center mt-6 lg:mt-0">
            <Box className="p-2 rounded-[16px] md:ml-20 w-[60%] lg:w-[80%] text-center">
              <img
                src={MobileApps}
                alt="Mobile Apps"
                className=" lg:w-full h-auto"
                style={{
                  marginTop: "-20px",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DownloadBanner;
