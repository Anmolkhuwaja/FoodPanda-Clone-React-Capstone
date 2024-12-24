import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import citiesData from "../../components/data/Cities.json";
import { Box, Button, Typography } from "@mui/material";
import Panda from "../../assets/Hero home page.webp";
import Card from "@mui/material/Card";
import restaurantsData from "../../components/data/RestaurantsData.json";

const City = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [city, setCity] = useState(null);
  const [restaurants, setRestaurants] = useState([]);
  const [closeRestaurants, setCloseRestaurants] = useState([]);

  useEffect(() => {
    // Find city data from imported JSON
    const cityData = citiesData.find((city) => city.id === id);
    setCity(cityData);
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    setRestaurants(restaurantsData.restaurants);
  }, []);

  useEffect(() => {
    setCloseRestaurants(restaurantsData.closed_restaurants);
  }, []);

  return (
    <>
      <div className="lg:!mt-[65px] lg:!h-[41vh] md:!h-[25vh] !h-[20vh] md:!mt-[100px] !mt-[70px] bg-[#f7f7f7] ">
        {city ? (
          <Box className="flex items-center lg:px-10 md:px-1">
            <Typography className="text-[#333333] lg:!text-[40px] md:!text-[25px] ps-5 !text-[12px] lg:ps-10 md:ps-1 !font-bold">
              {city.title}
            </Typography>
            <img
              src={Panda}
              className="lg:w-[36%] lg:ps-0 md:ps-36 ps-20 md:w-[67%] w-[70%] md:-mt-10"
              alt=""
            />
          </Box>
        ) : (
          <p>City not found</p>
        )}

        <Box className="lg:px-20 mt-6 lg:mt-8 md:mt-8 ms-0 md:ms-10 lg:ms-2 md:px-1 flex">
          <Link
            to="/"
            variant="body2"
            color="inherit"
            className="relative group md:ms-1 ms-6 underline font-medium text-[#39434d]"
          >
            Homepage
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-[3px]"></span>
          </Link>

          {city && (
            <Typography className="text-[#39434d] !font-medium !ms-4">
              {city.name}
            </Typography>
          )}
        </Box>
      </div>

      <Typography className="text-[#333333] !mt-16 md:!mt-16 lg:!mt-14 lg:!ms-14 md:!ps-6 ps-0 !ms-5 !font-medium lg:px-20 !text-[28px] lg:!text-[35px] md:!text-[25px]">
        All restaurants
      </Typography>

      <Box className="mt-6 lg:px-14 md:px-6 px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full">
        {restaurants.length > 0 ? (
          restaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="w-full cursor-pointer border border-gray-300 relative"
              onClick={() =>
                navigate(
                  `/restaurant/${restaurant.id}/${restaurant.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`
                )
              }
            >
              {/*Discount and Welcome Gift Boxes */}
              <Box className="absolute top-2 left-2 bg-[#F2247B] px-3 py-1 rounded-lg z-10">
                <Typography
                  className="!text-[14px] font-medium text-white"
                  component="p"
                >
                  10% off
                </Typography>
              </Box>

              <Box className="absolute top-12 left-2 bg-[#F2247B] px-3 py-1 rounded-lg z-10">
                <Typography className="!text-[14px] text-white" component="p">
                  Welcome gift: free de...
                </Typography>
              </Box>

              {/* Image Section */}
              <Box className="relative h-[40vh] overflow-hidden">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                />
              </Box>

              {/* Restaurant Info */}
              <Box className="flex justify-between items-center">
                <Typography
                  gutterBottom
                  className="pt-2 ps-2 text-[20px] text-[#333333] !font-bold"
                  component="div"
                >
                  {restaurant.name}
                </Typography>

                <Box className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 text-sm cursor-pointer"
                    fill="#ffb413"
                    stroke="orange"
                    strokeWidth="2"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <Typography
                    gutterBottom
                    className="ps-1 !text-sm pt-1"
                    component="div"
                  >
                    {restaurant.rating}
                  </Typography>
                  <span className="!text-sm ps-1 pr-2">
                    ({restaurant.reviews})
                  </span>
                </Box>
              </Box>

              {/* Additional Restaurant Info */}
              <Typography
                variant="body2"
                className="ps-2 !mb-2"
                sx={{ color: "text.secondary" }}
              >
                {restaurant.cuisine}
              </Typography>
            </Card>
          ))
        ) : (
          <Typography>No restaurants available.</Typography>
        )}
      </Box>

      <Box className="mt-6 lg:px-14 md:px-6 px-4 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full">
        {closeRestaurants.length > 0 ? (
          closeRestaurants.map((restaurant) => (
            <Card
              key={restaurant.id}
              className="w-full cursor-pointer border border-gray-300 relative overflow-hidden"
            >
              <Box className="relative h-[40vh] overflow-hidden">
                <Box className="absolute inset-0 bg-black opacity-50 z-10"></Box>
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform origin-center hover:scale-110"
                />
              </Box>

              {/* Centered Positioning for Discount and Welcome Gift Boxes */}
              <Box className="absolute lg:top-28 md:top-44 top-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center z-10">
                <Box className="lg:px-3 md:px-2 px-0 py-1 rounded-lg mb-1">
                  <Typography
                    className="!text-[16px] !font-semibold text-white"
                    component="p"
                  >
                    {restaurant.status}
                  </Typography>
                </Box>
                <Box className="bg-[#fff] px-3 py-1 rounded-lg transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg">
                  <Typography
                    className="!text-[14px] !font-bold text-[#F2247B] transition-colors duration-150 ease-in-out"
                    component="p"
                  >
                    Order for later
                  </Typography>
                </Box>
              </Box>

              {/* Restaurant Info */}
              <Box className="p-4">
                <Box className="flex justify-between items-center">
                  <Typography
                    gutterBottom
                    className="text-[20px] text-[#333333] !font-bold"
                    component="div"
                  >
                    {restaurant.name}
                  </Typography>

                  <Box className="flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-4 text-sm cursor-pointer"
                      fill="#ffb413"
                      stroke="orange"
                      strokeWidth="2"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                    <Typography
                      gutterBottom
                      className="ps-1 !text-sm pt-1"
                      component="div"
                    >
                      {restaurant.rating}
                    </Typography>
                    <span className="!text-sm ps-1 pr-2">
                      ({restaurant.reviews})
                    </span>
                  </Box>
                </Box>

                {/* Additional Restaurant Info */}
                <Typography variant="body2" className="!mb-2 text-gray-600">
                  {restaurant.cuisine}
                </Typography>
              </Box>
            </Card>
          ))
        ) : (
          <Typography>No restaurants available.</Typography>
        )}
      </Box>
    </>
  );
};

export default City;
