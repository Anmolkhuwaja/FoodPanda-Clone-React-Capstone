import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import useOrderForm from "./useOrderForm";

const OrderForm = () => {

  const {handleCloseModal, handleSubmit,handleChange, isModalOpen, errors, formData, cartItems,totalPrice } = useOrderForm()

  return (
    <Box className="flex flex-col !mt-20 lg:flex-row bg-white text-gray-800 md:!mr-14 md:!p-6 p-0 lg:space-x-10">
      {/* Left Side: Form */}
      <Box className="lg:w-3/5 w-full bg-white md:!p-6 lg:!ml-14 md:!ml-8 !p-0 rounded-lg md:px-20 !px-6">
        <Typography className="!text-2xl !font-medium mb-4 text-pink-600">Contact</Typography>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Box>
            <Typography htmlFor="name" className="block font-semibold">
              Name
            </Typography>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.name && (
              <Typography className="text-red-500 text-sm">{errors.name}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="email" className="block font-semibold">
              Email
            </Typography>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <Typography className="text-red-500 text-sm">{errors.email}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="address" className="block font-semibold">
              Address
            </Typography>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.address && (
              <Typography className="text-red-500 text-sm">{errors.address}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="phone" className="block font-semibold">
              Phone
            </Typography>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.phone && (
              <Typography className="text-red-500 text-sm">{errors.phone}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="city" className="block font-semibold">
              City
            </Typography>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.city && (
              <Typography className="text-red-500 text-sm">{errors.city}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="postalCode" className="block font-semibold">
              Postal Code
            </Typography>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.postalCode && (
              <Typography className="text-red-500 text-sm">{errors.postalCode}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="country" className="block font-semibold">
              Country
            </Typography>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.country && (
              <Typography className="text-red-500 text-sm">{errors.country}</Typography>
            )}
          </Box>

          <Box>
            <Typography htmlFor="paymentMethod" className="block font-semibold">
              Payment Method
            </Typography>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="">Select Payment Method</option>
              <option value="creditCard">Credit Card</option>
              <option value="paypal">PayPal</option>
              <option value="bankTransfer">Bank Transfer</option>
            </select>
            {errors.paymentMethod && (
              <Typography className="text-red-500 text-sm">{errors.paymentMethod}</Typography>
            )}
          </Box>

          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
          >
            Place Order
          </button>
        </form>
      </Box>

      {/* Right Side: Cart Items */}
            <Box className='px-6 md:px-0 lg:w-2/5 w-full h-full mt-20 mx-0 md:mx-8'>
            <Box className=" bg-pink-50 p-4 rounded-lg  md:!p-6">
        <Typography className="!text-2xl !font-medium mb-4 text-pink-600">Order Summary</Typography>
        <Box className="space-y-4">
          {cartItems.length === 0 ? (
            <Typography>Your cart is empty.</Typography>
          ) : (
            <Box>
              <ul className="space-y-2 mt-2">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <Box>
                      <Typography className="font-semibold">{item.name}</Typography>
                      <Typography className="text-sm text-gray-500">{item.details}</Typography>
                    </Box>
                    <Box className="flex items-center">
                      <Typography className="font-semibold">
                        Rs {item.price}
                      </Typography>
                    </Box>
                  </li>
                ))}
              </ul>
              <Box className="mt-4">
                <Typography className="!font-bold text-lg mt-2">
                  Total: Rs {totalPrice.toFixed(2)}
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
            </Box>
      {isModalOpen && (
        <Box className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <Box className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <Typography className="text-2xl font-bold text-pink-600 mb-4">
              Order Placed Successfully!
            </Typography>
            <Typography className="text-gray-600 mb-6">
              Your order has been successfully placed. We'll process it shortly.
            </Typography>
            <button
              onClick={handleCloseModal}
              className="py-2 px-4 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
            >
              <Link to="/">Home</Link>
            </button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default OrderForm;
