import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    isloged: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { isloged } = authSlice.actions;

export default authSlice.reducer;
