import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);

  if (!user.username) {
    return (
      <Box className="min-h-screen flex flex-col items-center justify-center bg-white">
        {/* Main Content */}
        <main className="flex-grow mt-2 flex flex-col items-center justify-center text-center px-4">
          {/* Icon Section */}
          <FontAwesomeIcon
            icon={faLock}
            className="text-pink-300 !text-[150px] mb-8"
          />

          {/* Text Section */}
          <Typography className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800">
            You don't have access
          </Typography>
          <Typography className="text-base sm:text-lg md:text-xl text-gray-600 mt-8">
            Please log in to access this feature. Return to the
            <Link
              to="/"
              className="text-pink-600 hover:underline ps-2 font-bold"
            >
              homepage
            </Link>
            .
          </Typography>
        </main>
      </Box>
    );
  }

  return children;
};

export default ProtectedRoute;
