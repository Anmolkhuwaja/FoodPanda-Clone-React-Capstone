import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'
import Hero from '../../assets/Hero home page.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
    <Box className="bg-[#f7f7f7] min-h-[89vh] items-center">
  <Box className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
    <Box className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-6">
      {/* Input Section */}
      <Box className="lg:basis-[60%] flex flex-col justify-center space-y-6 mb-8 lg:mb-0">
        <Typography className="!text-[40px] lg:!text-[48px] !text-[#333333] !font-bold !font-sans leading-tight">
          It's the food and groceries you love, delivered
        </Typography>
        <Box className="bg-white py-4 px-5 rounded-lg shadow-xl flex items-center space-x-4">
          <TextField
            id="outlined-basic"
            size="small"
            label="Your street and street number"
            className="w-full"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <FontAwesomeIcon
                    icon={faLocationCrosshairs}
                    className="text-2xl text-pink-700"
                  />
                  <span className="text-base ps-3 font-medium text-slate-700">
                    Locate me
                  </span>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            className="transform transition-transform duration-400 hover:scale-105"
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
      <Box className="lg:basis-[40%] flex justify-end">
        <img
          src={Hero}
          className="w-full max-w-none h-[calc(100vh-10rem)] object-cover lg:object-contain"
          alt="Hero image"
        />
      </Box>
    </Box>
  </Box>
</Box>


    </>
  )
}

export default Home;