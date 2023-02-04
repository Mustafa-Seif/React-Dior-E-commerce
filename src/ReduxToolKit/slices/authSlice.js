import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const authSlice = createSlice({
  name: "total",
  initialState,
  reducers: {
    isloged: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { isloged } = authSlice.actions;

export default authSlice.reducer;
