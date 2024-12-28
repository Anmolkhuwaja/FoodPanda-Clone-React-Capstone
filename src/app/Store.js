import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import favoriteReducer from "../slices/favoriteSlice";
import userReducer from "../slices/userSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoriteReducer,
    user: userReducer,
  },
});

export default store;
