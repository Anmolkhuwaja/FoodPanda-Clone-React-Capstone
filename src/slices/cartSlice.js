import { createSlice } from '@reduxjs/toolkit';

// Function to save the state to localStorage
const saveStateToLocalStorage = (state) => {
  localStorage.setItem('cart', JSON.stringify(state));
};

const initialState = {
  items: [], // cart items
};

// Function to load the state from localStorage
const loadStateFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  return savedCart ? JSON.parse(savedCart) : { cartItems: [], totalItems: 0, totalPrice: 0 };
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: loadStateFromLocalStorage(), // Load state from localStorage on initialization
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      const price = parseFloat(action.payload.price); // Ensure price is treated as a number

      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.totalPrice = +(existingItem.quantity * price).toFixed(2);
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: 1,
          totalPrice: +price.toFixed(2),
        });
      }

      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = +state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);

      saveStateToLocalStorage(state); // Save state to localStorage
    },

    incrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);

      if (item) {
        item.quantity += 1;
        item.totalPrice = +(item.quantity * item.price).toFixed(2);
      }

      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = +state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);
      saveStateToLocalStorage(state); // Save state
    },

    decrementItem: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);

      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = +(item.quantity * item.price).toFixed(2);
      } else if (item) {
        state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
      }

      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = +state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);
      saveStateToLocalStorage(state); // Save state
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);

      state.totalItems = state.cartItems.reduce((sum, item) => sum + item.quantity, 0);
      state.totalPrice = +state.cartItems.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2);
      saveStateToLocalStorage(state); // Save state
    },
  },
});

// Export the actions
export const { addToCart, removeFromCart, incrementItem, decrementItem } = cartSlice.actions;

// Create the Redux store
export default cartSlice.reducer;
