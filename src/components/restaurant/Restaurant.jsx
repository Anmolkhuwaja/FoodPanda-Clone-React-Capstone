import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Divider, Typography } from "@mui/material";
import restaurantsData from "../../components/data/RestaurantsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBicycle,
  faCrown,
  faFire,
  faFireFlameCurved,
  faInfo,
  faInfoCircle,
  faMotorcycle,
  faPercentage,
  faPlus,
  faShoppingBasket,
} from "@fortawesome/free-solid-svg-icons";

const Restaurant = () => {
  const { id, name } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Popular", "Strong Pepsi Deals", "Rice", "Sides"];

  useEffect(() => {
    const selectedRestaurant = restaurantsData.restaurants.find(
      (item) => item.id === id
    );
    setRestaurant(selectedRestaurant);
  }, [id]);

  if (!restaurant) {
    return <Typography>Loading...</Typography>;
  }
  restaurant.details.menu.categories.find(
    (category) => category.name === "Rice"
  );

  const getFilteredItems = () => {
    if (activeTab === "All") {
      // Combine all items from all categories
      const allItems = [
        ...restaurant.details.menu.popular,
        ...restaurant.details.menu.deals.flatMap((deal) => deal.items),
        ...restaurant.details.menu.categories.flatMap(
          (category) => category.items
        ),
      ];
      return allItems;
    }
    if (activeTab === "Popular") return restaurant.details.menu.popular;
    if (activeTab === "Strong Pepsi Deals")
      return restaurant.details.menu.deals.flatMap((deal) => deal.items);
    const category = restaurant.details.menu.categories.find(
      (cat) => cat.name === activeTab
    );
    return category ? category.items : [];
  };

  const filteredItems = getFilteredItems();

  return (
    <>
      <Box className="lg:px-20 mt-20 lg:mt-20 md:mt-32 ms-0 md:ms-20 lg:ms-4 md:px-1 flex items-center">
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

      <Box className="flex flex-col lg:ms-0 md:ms-16 ms-0 md:flex-row md:gap-6">
        {/* Restaurant Image */}
        <Box className="lg:ms-24 md:ms ms-4 mt-5">
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
          <Box className="flex items-center justify-center !mt-4 md:!ms-5 -!ms-6">
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

      <Typography className="text-[#333333] !mt-8 md:!mt-16 lg:!mt-8 lg:!ms-18 md:!ps-6 ps-0 !ms-16 !font-medium lg:px-20 !text-[24px] lg:!text-[25px] md:!text-[20px]">
        Available deals
      </Typography>

      <Box className="flex flex-col md:flex-row items-center justify-start md:mt-0 mt-4">
        <Box className="bg-[#f7f7f7] w-72 md:ms-20 px-2 py-5 rounded-lg hover:scale-105 hover:bg-[#e5e5e5] transition-all duration-300 relative">
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
        <Box className="bg-[#ffd7de] w-72 md:mt-0 mt-4 md:ms-8 px-2 py-5 rounded-lg hover:scale-105 hover:bg-[#e9afb9] transition-all duration-300 relative">
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
          <div className="bg-white p-4 shadow">
            <ul className="flex gap-6 md:justify-center md:flex-row flex-col text-center border-gray-300">
              {tabs.map((tab) => (
                <li
                  key={tab}
                  className={`group relative cursor-pointer px-6 py-2 text-gray-700 hover:text-black font-medium transition-all ${
                    activeTab === tab ? "text-black" : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  <span className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-100 rounded-md transition-all"></span>
                  <span className="relative z-10">{tab}</span>
                  <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-black transition-all group-hover:w-full group-hover:left-0"></span>
                </li>
              ))}
            </ul>
          </div>
        </Box>

        {/* Cards and drawer */}
        <div class="flex flex-col md:px-[65px] md:mt-0 mt-40 lg:flex-row gap-4 p-4 h-[100%]">
          {/* AI Cards */}
          <div className="w-full lg:w-3/4 bg-white h-full rounded-lg p-4">
            <Typography class="text-2xl font-bold mb-4 mt-5">
              <FontAwesomeIcon
                className="text-yellow-400 pr-2 !text-2xl"
                icon={faFireFlameCurved}
              />
              {activeTab === "All" ? "All Items" : activeTab}
            </Typography>

            <Typography class="text-2xl font-bold mb-4 mt-5">
              {activeTab === "All" ? "" : ""}
            </Typography>

            <Box className="flex flex-wrap gap-4 mt-8">
              {filteredItems.map((item, index) => (
                <Box
                  key={index}
                  className="relative border flex items-start justify-between w-full rounded-xl sm:w-[48%] lg:w-[49%] h-[24vh] px-3 py-2 overflow-hidden transition-transform transform hover:scale-105 hover:translate-y-2"
                >
                  <Box>
                    <Typography className="!font-bold !text-[16px] !mt-1">
                      {item.name}
                    </Typography>
                    <Typography className="text-pink-600">
                      {item.price}
                      <span className="text-[#707070] ps-2 line-through !text-[14px]">
                        {item.originalPrice}
                      </span>
                    </Typography>
                    <Typography className="text-[#707070]">
                      {item.description}
                    </Typography>
                  </Box>
                  <Box className="overflow-hidden ms-10 mt-1">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-cover ms-3 rounded-lg w-[80%] transition-transform"
                    />
                  </Box>
                  {/* Add to Cart Button */}
                  <Typography className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full">
                    <FontAwesomeIcon icon={faPlus} />
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>

          {/* Cart part */}
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
