import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Box, Button, Divider, Modal, Typography } from "@mui/material";
import restaurantsData from "../../components/data/RestaurantsData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCrown,
  faFireFlameCurved,
  faHeart,
  faInfoCircle,
  faMinus,
  faMotorcycle,
  faPercentage,
  faPlus,
  faShoppingBasket,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  incrementItem,
  decrementItem,
  addToCart,
} from "../../slices/cartSlice";
import { addToFavorites } from "../../slices/favoriteSlice";

const Restaurant = () => {
  const { id, name } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const [activeTab, setActiveTab] = useState("All");
  const tabs = ["All", "Popular", "Strong Pepsi Deals", "Rice", "Sides"];
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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

  const handleOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleAddToCart = () => {
    const price = parseFloat(selectedItem.price.replace(/[^\d.-]/g, ""));

    if (!isNaN(price)) {
      dispatch(
        addToCart({
          id: selectedItem.id,
          name: selectedItem.name,
          price: selectedItem.price,
          description: selectedItem.description,
          image: selectedItem.image,
        })
      );
    } else {
      console.error("Invalid price format");
    }
  };

  // Example of incrementing/decrementing the quantity
  const handleIncrement = (id) => {
    dispatch(incrementItem({ id }));
  };

  const handleDecrement = (id) => {
    dispatch(decrementItem({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

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
        <Box className="h-[10vh]  !mb-10">
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
          {/* Cards */}
          <div className="w-full lg:w-3/4 bg-white h-full rounded-lg p-4">
            <Typography className="text-2xl font-bold mb-4 !mt-14 md:!mt-0">
              <FontAwesomeIcon
                className="text-yellow-400 pr-2 !text-2xl"
                icon={faFireFlameCurved}
              />
              {activeTab === "All" ? "All Items" : activeTab}
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
                      Rs. {item.price}
                      <span className="text-[#707070] ps-2 line-through !text-[14px]">
                        Rs. {item.originalPrice}
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
                  <Typography
                    onClick={() => handleOpen(item)}
                    className="absolute bottom-5 right-5 bg-white cursor-pointer px-2 shadow py-1 text-2xl border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full"
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Typography>
                  <Typography
                    onClick={() => dispatch(addToFavorites(item))}
                    className="absolute bottom-5 right-16 bg-white cursor-pointer px-2 shadow py-1 text-base border text-center text-[#575a5d] border-[#91969b] transition-transform duration-200 ease-in-out hover:scale-110 hover:bg-[#f4f8ff] items-center rounded-full"
                  >
                    <FontAwesomeIcon icon={faHeart} />
                  </Typography>
                </Box>
              ))}
            </Box>
          </div>

          {/* drawer part */}
          <Box className="w-full hidden lg:block mt-24 lg:w-1/4 h-[70vh] bg-gray-50 shadow-lg rounded-lg flex flex-col p-4 relative overflow-hidden"
>
  {cart.cartItems.length === 0 ? (
    <div
      id="cart-empty"
      className="text-center !py-4 flex-grow flex flex-col justify-center"
    >
      <img
        src="https://foodpanda.dhmedia.io/image/bento/production/web/fp/empty-state/illu_cart_empty.svg"
        alt="Empty Cart Image"
        className="mx-auto mb-4 w-24 h-24 object-contain"
      />
      <Typography className="text-gray-700 !font-bold !text-2xl !mb-3">
        Hungry?
      </Typography>
      <Typography className="text-gray-500 px-4 !text-lg mb-4">
        You haven't added anything to your cart!
      </Typography>
    </div>
  ) : (
    <>
      {/* Scrollable Items Section */}
      <div
        id="cart-items"
        className="overflow-y-auto flex-grow pr-2"
        style={{ maxHeight: "calc(100% - 80px)" }} // Adjust to leave space for the footer
      >
        {cart.cartItems.map((item) => (
          <div key={item.id} className="mb-4">
            <Box className="flex items-start justify-between p-4">
              <img className="w-16" src={item.image} alt="" />
              <div className="flex-grow pl-2">
                <p className="text-gray-800 font-medium">{item.name}</p>
                <div className="flex items-center mt-2">
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => handleDecrement(item.id)}
                      className="bg-white p-1 !text-md rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <span className="bg-white p-1 !text-md rounded-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleIncrement(item.id)}
                      className="bg-white rounded-lg !text-md p-1 transition duration-300 ease-in-out transform hover:scale-105"
                    >
                      <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="bg-white border ms-4 border-gray-300 px-2 py-1 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    <FontAwesomeIcon icon={faTrashAlt} />
                  </button>
                </div>
                <p className="text-sm text-gray-500 mt-2">{`Rs. ${item.totalPrice}`}</p>
              </div>
            </Box>
          </div>
        ))}
      </div>
    </>
  )}

  {/* Fixed Button Section */}
  <div
    id="cart-footer"
    className="absolute bottom-0 left-0 w-full bg-gray-50 border-t border-gray-300 p-4"
  >
    <div className="mb-2 flex justify-between items-center">
      <Typography className="font-bold text-gray-800">
        <span className="!font-bold">Total</span> (incl. fees and tax)
      </Typography>
      <Typography className="text-lg !font-bold text-pink-600">
        Rs: {cart.totalPrice}
      </Typography>
    </div>
    <button
      className={`!bg-pink-600 text-white px-6 py-2 rounded-lg shadow-md font-medium transition-all duration-300 w-full ${
        cart.cartItems.length === 0
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-pink-800"
      }`}
      disabled={cart.cartItems.length === 0} // Always visible but disabled when no items
    >
      <Link to={cart.cartItems.length > 0 ? "/order" : "#"}>
        Review payment and address
      </Link>
    </button>
  </div>
        </Box>

          {/* Modal */}
          <Modal open={open} onClose={handleClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                height: "70%",
                borderRadius: 2,
                outline: "none",
              }}
            >
              {selectedItem && (
                <>
                  <Box>
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-[35vh] object-cover rounded-lg mb-4"
                      style={{
                        objectFit: "cover",
                        imageRendering: "optimizeQuality",
                        width: "100%",
                        height: "35vh",
                        borderRadius: "8px",
                      }}
                    />
                  </Box>

                  <Typography
                    variant="h5"
                    className="px-2 text-pink-600 font-semibold"
                    component="h2"
                    gutterBottom
                  >
                    {selectedItem.name}
                  </Typography>

                  <Typography
                    variant="body1"
                    className="px-2 text-gray-700"
                    gutterBottom
                  >
                    {selectedItem.description}
                  </Typography>

                  <Typography
                    variant="h6"
                    className="px-2 text-gray-900 font-bold"
                  >
                    Rs: {selectedItem.price}
                  </Typography>

                  <Typography
                    className="px-2 text-gray-500 line-through"
                    variant="body2"
                  >
                    Rs:{selectedItem.originalPrice}
                  </Typography>

                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    className="!bg-pink-600 !text-white !w-[80%] !ms-10 hover:!bg-pink-700 transition"
                    onClick={() => {
                      handleAddToCart();
                      handleClose();
                    }}
                  >
                    Add to Cart
                  </Button>
                </>
              )}
            </Box>
          </Modal>
        </div>
      </Box>
    </>
  );
};

export default Restaurant;
