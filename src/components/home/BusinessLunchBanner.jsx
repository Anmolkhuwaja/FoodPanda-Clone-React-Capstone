import React from 'react'
import Home from "../../assets/home-corporate-pk.jpg";
import { Box, Button, Typography } from "@mui/material";

const BusinessLunchBanner = () => {
  return (
    <>
      <Typography className="!text-[24px] sm:!text-[30px] lg:!text-[30px] !mt-10 sm:!mt-30 lg:!mt-30 !text-[#333333] !font-bold !font-sans leading-tight px-3 lg:pl-24">
      Take your office out to lunch
      </Typography>

      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[3%]">
      <img 
  src={Home}
  className="w-auto max-w-[100%] absolute h-auto 
    md:h-[40vh] lg:h-full lg:w-auto object-cover lg:object-contain
   top-[1500%] md:top-[825%] lg:top-[150px] xl:top-[605%]"
  style={{
    left: 0,
  }}
  alt="Hero image"
/>


        <Box className="bg-white lg:top-[262px] sm:top-[60%] md:top-[14.85rem] lg:w-[90%] sm:w-[60%] md:w-[45%] lg:h-[35vh] md:h-[25vh] shadow-xl p-8 lg:ms-24 md:ms-24 rounded-[16px] relative">
          <Typography variant="h6" className="!font-bold">
          foodpanda for business
          </Typography>
          <Typography variant="body1" className="font-medium !mt-6">
          Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more.
          </Typography>
          <Button
            variant="outlined"
            className="transform w-32 !mt-6 transition-transform duration-400 hover:scale-105"
            sx={{
              color: "#fff",
              border: "1px solid #e21b70",
              background: "#e21b70",
              fontWeight: "500",
              paddingY: "12px",
              textTransform: "capitalize",
              "&:hover": {
                backgroundColor: "#9d0a48",
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default BusinessLunchBanner;