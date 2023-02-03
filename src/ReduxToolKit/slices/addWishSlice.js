import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addWishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addItemToWish: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItemFromWish: (state, action) => {
      state.value = state.value.filter((x) => {
        return x.id !== action.payload.id;
      });
    },
  },
});

export const { addItemToWish, deleteItemFromWish } = addWishSlice.actions;

export default addWishSlice.reducer;
