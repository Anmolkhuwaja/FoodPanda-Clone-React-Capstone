import { createSlice } from "@reduxjs/toolkit";

const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: initialFavorites,
  },
  reducers: {
    addToFavorites: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (!existingItem) {
        state.items.push(action.payload);
        localStorage.setItem("favorites", JSON.stringify(state.items));
      }
    },
    removeFromFavorites: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("favorites", JSON.stringify(state.items));
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;
