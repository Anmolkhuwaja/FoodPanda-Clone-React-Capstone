import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../slices/cartSlice"; // Adjust the import path based on your setup
import { Link } from "react-router-dom";

const OrderForm = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems); // Fetch cart items from Redux state
  const totalPrice = useSelector((state) => state.cart.totalPrice); // Get total price from Redux state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
    city: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState({}); // Store errors here
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) newErrors.email = "Email is required.";
    if (!formData.address) newErrors.address = "Address is required.";
    if (!formData.phone) newErrors.phone = "Phone number is required.";
    if (!formData.city) newErrors.city = "City is required.";
    if (!formData.postalCode) newErrors.postalCode = "Postal code is required.";
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.paymentMethod)
      newErrors.paymentMethod = "Please select a payment method.";

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // If no items in the cart, don't submit the form
    if (cartItems.length === 0) {
      alert(
        "Your cart is empty. Please add items to the cart before submitting."
      );
      return;
    }

    if (!validateForm()) return;

    // Open modal on successful order placement
    setIsModalOpen(true);

    // Save order to localStorage
    const orderDetails = {
      formData,
      cartItems,
      totalPrice,
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

    // Log order details to console (for tracking)
    console.log("Order Placed:", orderDetails);

    // Clear cart and form after submission
    cartItems.forEach((item) => dispatch(removeFromCart({ id: item.id })));
    setFormData({
      name: "",
      email: "",
      address: "",
      phone: "",
      city: "",
      postalCode: "",
      country: "",
      paymentMethod: "",
    });
    setErrors({});
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col !mt-16 lg:flex-row bg-white text-gray-800 p-6 lg:space-x-8">
      {/* Left Side: Form */}
      <div className="lg:w-3/5 w-full bg-white p-6 rounded-lg shadow-md border">
        <h1 className="text-2xl font-bold mb-4 text-pink-600">Contact</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="address" className="block font-semibold">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block font-semibold">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone}</p>
            )}
          </div>

          <div>
            <label htmlFor="city" className="block font-semibold">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city}</p>
            )}
          </div>

          <div>
            <label htmlFor="postalCode" className="block font-semibold">
              Postal Code
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm">{errors.postalCode}</p>
            )}
          </div>

          <div>
            <label htmlFor="country" className="block font-semibold">
              Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country}</p>
            )}
          </div>

          <div>
            <label htmlFor="paymentMethod" className="block font-semibold">
              Payment Method
            </label>
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
              <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Right Side: Cart Items */}
      <div className="lg:w-2/5 w-full bg-pink-50 p-6 rounded-lg shadow-md border">
        <h2 className="text-2xl font-bold mb-4 text-pink-600">Order Summary</h2>
        <div className="space-y-4">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-gray-500">{item.details}</p>
                    </div>
                    <div className="flex items-center">
                      <p className="font-semibold">
                        Rs {item.price}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="font-medium">Shipping: Rs 150.00</p>
                <p className="font-bold text-lg mt-2">
                  Total: Rs {totalPrice.toFixed(2)}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 shadow-lg w-80 text-center">
            <h2 className="text-2xl font-bold text-pink-600 mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-600 mb-6">
              Your order has been successfully placed. We'll process it shortly.
            </p>
            <button
              onClick={handleCloseModal}
              className="py-2 px-4 bg-pink-600 text-white font-bold rounded-md hover:bg-pink-700"
            >
              <Link to="/">Home</Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderForm;
