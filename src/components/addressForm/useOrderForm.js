import React, { useState } from 'react'
import { removeFromCart } from '../../slices/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

const useOrderForm = () => {
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

  return {handleCloseModal, handleSubmit,handleChange, isModalOpen, errors, formData, cartItems, totalPrice }
}

export default useOrderForm