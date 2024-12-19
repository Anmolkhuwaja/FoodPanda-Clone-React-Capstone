import { Box, Button, Typography } from "@mui/material";
import React from "react";
import HeroImg from "../../assets/home-vendor-pk.jpg";

const RestauratList = () => {
  return (
    <>
      <Typography className="!text-[24px] sm:!text-[30px] lg:!text-[30px] !mt-10 sm:!mt-30 lg:!mt-30 !text-[#333333] !font-bold !font-sans leading-tight px-3 lg:pl-24">
      You prepare the food, we handle the rest
      </Typography>

      <Box className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-[3%]">
        <img
          src={HeroImg}
          className="w-auto max-w-[100%] absolute h-auto md:h-[40vh] lg:h-full lg:w-auto object-cover lg:object-contain"
          style={{
            top: "103%",
            left: 0,
          }}
          alt="Hero image"
        />

        <Box className="bg-white lg:top-[222px] sm:top-[30px] md:top-[12.85rem] lg:w-[90%] sm:w-[60%] md:w-[45%] lg:h-[55vh] md:h-[45vh] shadow-xl p-8 lg:ms-24 md:ms-24 rounded-[16px] relative">
          <Typography variant="h6" className="!font-bold">
            List your restaurant or shop on foodpanda
          </Typography>
          <Typography variant="body1" className="font-medium !mt-6">
            Would you like millions of new customers to enjoy your amazing food
            and groceries? So would we!
          </Typography>
          <Typography variant="body1" className="font-medium !mt-6">
            It's simple: we list your menu and product lists online, help you
            process orders, pick them up, and deliver them to hungry pandas – in
            a heartbeat!
          </Typography>
          <Typography variant="body1" className="font-medium !mt-6">
            Interested? Let's start our partnership today!
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
  );
};

export default RestauratList;
