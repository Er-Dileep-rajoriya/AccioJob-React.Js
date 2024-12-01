import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const reduxSlice = createSlice({
  name: "USER",
  initialState: initialState,
  reducers: {
    login: (state, action) => {
      console.log("Signup...");
      console.log(action.payload);

      // set the token (email) to the local storage
      localStorage.setItem("token", action.payload);
    },
    logout: () => {
      localStorage.removeItem("token");
    },
  },
});

export const { login, logout } = reduxSlice.actions;
export const signupReducer = reduxSlice.reducer;
export default reduxSlice;
