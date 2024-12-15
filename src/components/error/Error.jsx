import { Typography } from "@mui/material";
import React from "react";

const Error = () => {
  return (
    <>
      <div class="flex flex-col items-center justify-center h-90 text-center px-4">
        {/* 404 Large Text  */}
        <h1 class="text-[150px] sm:text-[250px] md:text-[150px] lg:text-[250px] xl:text-14xl text-slate-100 font-sans ">
          404
        </h1>

        {/* Error Message  */}
        <Typography class="text-2xl md:text-3xl font-light text-pink-600 mt-4">
          Something went wrong
        </Typography>

        {/* Detailed Message */}
        <Typography class="text-sm md:text-2xl text-gray-900 mt-2 font-light leading-relaxed">
          We're deeply sorry, but something went wrong. Please try to refresh
          the page or
          <a href="#" class="text-pink-600 underline hover:no-underline ml-1">
            Start <br />over.
          </a>
        </Typography>
      </div>
    </>
  );
};

export default Error;
