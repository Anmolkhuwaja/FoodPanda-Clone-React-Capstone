import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import restaurantsData from "../../components/data/RestaurantsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faCrown,
  faInfo,
  faInfoCircle,
  faMotorcycle,
  faPercentage,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const Restaurant = () => {
  const { id, name } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const selectedRestaurant = restaurantsData.restaurants.find(
      (item) => item.id === id
    );
    setRestaurant(selectedRestaurant);
  }, [id]);

  if (!restaurant) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <Box className="lg:px-20 mt-20 lg:mt-20 md:mt-32 ms-0 md:ms-10 lg:ms-2 md:px-1 flex items-center">
        <Link
          to="/"
          variant="body2"
          color="inherit"
          className="relative group md:ms-1 ms-6 underline font-medium text-[#39434d]"
        >
          Homepage
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#39434d] transition-all duration-300 ease-in-out group-hover:w-full group-hover:h-[3px]"></span>
        </Link>
        <Typography className="text-xl ps-5 capitalize text-[#39434d] !font-bold mt-10">
          {name}
        </Typography>
      </Box>

      <Box className="flex">
        {/* Restaurant Image */}
        <Box className="ms-24 mt-5">
          <img
            src={restaurant.details.deliveryInfo.image}
            className="rounded-2xl"
            alt={restaurant.name}
          />
        </Box>
        <Box className="items-center justify-center mt-10">
          <Typography className="!text-sm text-gray-500 ps-6">
            {restaurant.details.deliveryInfo.type}
          </Typography>
          <Typography className="!text-3xl ps-5 capitalize text-[#000] !font-bold !mt-4">
            {name}
          </Typography>
          <Box className="flex items-center justify-center !mt-4 !ms-5">
            <FontAwesomeIcon
              className="text-black text-[15px]"
              icon={faMotorcycle}
            />
            <Typography className="text-[#FF2B85] !text-[14px] ps-2 !font-bold">
              {restaurant.details.deliveryInfo.delivery}
            </Typography>
            <Typography className="ps-2 line-through">
              {restaurant.details.deliveryInfo.priceRange}
            </Typography>
            <Typography className="ps-2">
              • <FontAwesomeIcon icon={faShoppingBasket} />
            </Typography>
            <Typography className="ps-2">
              Min. order {restaurant.details.deliveryInfo.minOrder}
            </Typography>
          </Box>

          <Box className="flex items-center justify-start !mt-4 ps-5">
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
              {restaurant.details.deliveryInfo.rating}
            </Typography>
            <span className="!text-sm ps-1 pr-2 text-gray-500">
              ({restaurant.details.deliveryInfo.reviews})
            </span>

            <Box className="relative group ms-3 text-gray-800 font-medium cursor-pointer">
              <span className="relative z-10">See reviews</span>
              <span className="absolute left-[-0.5rem] top-[-0.5rem] w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gray-200 text-white rounded-md opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"></span>
            </Box>
            <Box className="relative group ms-4 text-gray-800 font-medium cursor-pointer">
              <span className="relative z-10">
                <FontAwesomeIcon
                  className="text-gray-400 text-[15px] pr-2"
                  icon={faInfoCircle}
                />
                More info
              </span>
              <span className="absolute left-[-0.5rem] top-[-0.5rem] w-[calc(100%+1rem)] h-[calc(100%+1rem)] bg-gray-200 text-white rounded-md opacity-0 scale-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:scale-100"></span>
            </Box>
          </Box>
        </Box>
      </Box>

      <Divider className="!mt-6" />

      <Typography className="text-[#333333] !mt-10 md:!mt-16 lg:!mt-8 lg:!ms-18 md:!ps-6 ps-0 !ms-16 !font-medium lg:px-20 !text-[24px] lg:!text-[25px] md:!text-[20px]">
        Available deals
      </Typography>

      <Box className="flex">
        <Box className="bg-[#f7f7f7] w-72 ms-20 px-2 py-5 rounded-lg hover:scale-105 hover:bg-[#e5e5e5] transition-all duration-300 relative">
          <Box className="flex">
            <span className="bg-purple-700 px-1 py-1 text-white font-medium rounded-md !text-[12px]">
              <FontAwesomeIcon icon={faCrown} /> PRO
            </span>
            <Typography>15% off</Typography>
          </Box>
          <Typography className="!text-[14px] !mt-2 text-slate-700">
            No min. order required. and special savings for pandapro members
          </Typography>
        </Box>
        <Box className="bg-[#ffd7de] w-72 ms-8 px-2 py-5 rounded-lg hover:scale-105 hover:bg-[#e9afb9] transition-all duration-300 relative">
          <Box className="flex items-center">
            <span className="bg-pink-600 px-2 py-1 border !border-dashed text-white font-medium rounded-full !text-[12px]">
              <FontAwesomeIcon className="text-[16px]" icon={faPercentage} />
            </span>
            <Typography>10% off</Typography>
          </Box>
          <Typography className="!text-[14px] !mt-2 text-slate-700">
            No min. order required. Valid for all items. Auto applied.
          </Typography>
        </Box>
      </Box>

      {/* Tabs  */}
      <Box className="mt-5">
        <Box className="h-[10vh]">

        <div class="bg-white p-4 shadow">
  <ul class="flex gap-6 justify-center text-center border-gray-300">
    <li class="group relative cursor-pointer px-6 py-2 text-gray-700 hover:text-black font-medium transition-all">
      <span class="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 rounded-md transition-all"></span>
      <span class="relative z-10">Popular 3</span>
      <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
    </li>
    <li class="group relative cursor-pointer px-6 py-2 text-gray-700 hover:text-black font-medium transition-all">
      <span class="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 rounded-md transition-all"></span>
      <span class="relative z-10">Strong Pepsi Deals 3</span>
      <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
    </li>
    <li class="group relative cursor-pointer px-6 py-2 text-gray-700 hover:text-black font-medium transition-all">
      <span class="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 rounded-md transition-all"></span>
      <span class="relative z-10">Rice 1</span>
      <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
    </li>
    <li class="group relative cursor-pointer px-6 py-2 text-gray-700 hover:text-black font-medium transition-all">
      <span class="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 rounded-md transition-all"></span>
      <span class="relative z-10">Sides 3</span>
      <span class="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
    </li>
  </ul>
        </div>



        </Box>

        {/* Cards and drawer */}
        <div class="flex flex-col px-[65px] lg:flex-row gap-4 p-4 min-h-screen">
        <div class="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-4">
          <h2 class="text-lg font-bold mb-4">Cards Section</h2>
          <p>This is the left section where your cards will go.</p>
        </div>

  <div class="w-full lg:w-1/4 bg-gray-50 shadow-lg rounded-lg p-4">
    <h2 class="text-lg font-bold mb-4">Cart Section</h2>
    <p>This is the right section where your cart or drawer will go.</p>
  </div>
</div>



      </Box>
    </>
  );
};

export default Restaurant;
