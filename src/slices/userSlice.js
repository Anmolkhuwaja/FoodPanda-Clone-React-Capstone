import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).username
    : "",
  email: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")).email
    : "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    clearUser: (state) => {
      state.username = "";
      state.email = "";
      localStorage.removeItem("user");
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
