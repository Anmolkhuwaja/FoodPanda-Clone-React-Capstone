import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Box class="flex flex-col lg:!mt-20 md:!mt-16 !mt-20 items-center justify-center h-full text-center px-4">
        <Typography class="text-[150px] sm:text-[250px] md:text-[150px] lg:text-[250px] xl:text-14xl text-slate-100 font-sans ">
          404
        </Typography>

        <Typography class="text-2xl md:text-3xl font-light text-pink-600 mt-4">
          Something went wrong
        </Typography>

        <Typography class="text-sm md:text-2xl text-gray-900 mt-2 font-light leading-relaxed">
          We're deeply sorry, but something went wrong. Please try to refresh
          the page or
          <Link
            to={"/"}
            class="text-pink-600 underline hover:no-underline ml-1"
          >
            Start over.
          </Link>
        </Typography>
      </Box>
    </>
  );
};

export default Error;
