import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MobileApps from "../../assets/foodpanda-Apps.webp";
import QR from "../../assets/QR Code.png";
import Apple from "../../assets/Applee.jpg"

const DownloadBanner = () => {
  return (
    <>
      <Typography className="!text-[24px] sm:!text-[30px] lg:!text-[30px] !mt-10 sm:!mt-30 lg:!mt-30 !text-[#333333] !font-bold !font-sans leading-tight px-3 lg:pl-24">
        Put us in your pocket
      </Typography>

      <Box className="grid lg:grid-cols-1 gap-4 mt-[3%] h-[50vh] relative px-16">
        <Box className="w-full h-full bg-[#E21B70] rounded-[16px] relative flex items-center">
          <Box className="text-white p-4 w-[40%]">
            <Typography variant="h6" className="!font-medium">
              Download the food and groceries you love
            </Typography>
            <Box className="flex items-center mt-5">
              <img src={QR} alt="" className="w-[20%] border p-1 rounded-md" />
              <Typography variant="body1" className="mt-4 ps-6">
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </Typography>
            </Box>

            <Box className='flex items-center justify-center'>
            <Box className='flex bg-black w-[55%] mt-6 items-center border border-[white] rounded-md justify-start'>
                <img src={Apple} className="w-[30%] rounded-2xl" alt="" />
                <box>
                  <Typography className="!text-[10px] ps-1">Download on the</Typography>
                  <Typography className="!text-[18px]">App Store</Typography>
                </box>
            </Box>

              <Box className='flex bg-black ms-4 w-[59%] mt-6 items-center border border-[white] rounded-md justify-start'>
                <img src={Apple} className="w-[30%] rounded-2xl" alt="" />
                <box>
                  <Typography className="!text-[10px] ps-1">GET IT ON</Typography>
                  <Typography className="!text-[18px]">Google Play</Typography>
                </box>
              </Box>

              <Box className='flex bg-black ms-4 w-[56%] mt-6 items-center border border-[white] rounded-md justify-start'>
                <img src={Apple} className="w-[30%] rounded-2xl" alt="" />
                <box>
                  <Typography className="!text-[10px] ps-1">EXPLORE IT ON</Typography>
                  <Typography className="!text-[18px]">AppGallery</Typography>
                </box>
              </Box>
            </Box>
            

          </Box>
        </Box>

        <Box className="absolute top-0 right-[5%] h-full flex items-center justify-end">
          <Box className="p-2 rounded-[16px] w-[50%]">
            <img
              src={MobileApps}
              alt="Descriptive Alt Text"
              className="w-full h-auto"
              style={{
                marginTop: "-20px",
              }}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DownloadBanner;
