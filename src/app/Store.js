import { configureStore} from "@reduxjs/toolkit";
import cartSlice from "../slices/cartSlice";

// Create the Redux store
const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});


export default store;
