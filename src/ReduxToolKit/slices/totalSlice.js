import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const totalSlice = createSlice({
  name: "getAllTotal",
  initialState,
  reducers: {
    getAllTotal: (state, action) => {
      state.value = action.payload
    },
  },
});

export const { getAllTotal } = totalSlice.actions;

export default totalSlice.reducer;
