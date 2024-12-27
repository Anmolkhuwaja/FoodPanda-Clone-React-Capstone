import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";
import favoriteReducer from "../slices/favoriteSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice,
    favorites: favoriteReducer,
  },
});


export default store;
