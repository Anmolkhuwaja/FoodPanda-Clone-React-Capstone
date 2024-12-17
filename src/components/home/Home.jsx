import { Box, Button, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react'
import Hero from '../../assets/Hero home page.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <>
   <Box className="bg-[#f7f7f7] min-h-[100vh] items-center overflow-hidden">
  <Box className="max-w-[1370px] mx-auto px-0 sm:px-0 lg:px-0">
    <Box className="flex flex-col lg:flex-row items-center lg:items-start">
      {/* Input Section */}
      <Box className="lg:basis-[55%] lg:ps-20 flex flex-col justify-center space-y-6 mb-8 lg:mb-0">
        <Typography className="!text-[30px] px-3 lg:!text-[40px] !mt-40 !text-[#333333] !font-bold !font-sans leading-tight">
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
                  <span className="text-base ps-5 font-medium text-slate-700">
                    Locate me
                  </span>
                </InputAdornment>
              ),
            }}
          />
          <Button
            variant="outlined"
            className="transform w-32 transition-transform duration-400 hover:scale-105"
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
        <img
          src={Hero}
          className="w-auto max-w-[180%] h-auto lg:h-full lg:w-auto object-cover lg:object-contain"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0, 
            marginLeft: '45px',
          }}
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