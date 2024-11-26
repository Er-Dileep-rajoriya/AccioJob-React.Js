import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const reduxSlice = createSlice({
  name: "signup",
  initialState: initialState,
  reducers: {
    signup: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));

      console.log("signup called");
    },
  },
});

export const { signup } = reduxSlice.actions;
export const signupReducer = reduxSlice.reducer;
export default reduxSlice;
