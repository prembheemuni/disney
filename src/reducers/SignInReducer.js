import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const SignInReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    SignInOperation: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    SignOutOperation: (state, action) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export default SignInReducer.reducer;

export const { SignInOperation, SignOutOperation } = SignInReducer.actions;

export const getUserName = (state) => state.user.name;
export const getEmail = (state) => state.user.email;
export const getPhoto = (state) => state.user.photo;
