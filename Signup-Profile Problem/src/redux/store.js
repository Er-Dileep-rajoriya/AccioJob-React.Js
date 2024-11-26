// store.js
import { configureStore } from "@reduxjs/toolkit";
import { signupReducer } from "./reduxSlice";

const store = configureStore({
  reducer: {
    signupReducer,
  },
});

export default store;
