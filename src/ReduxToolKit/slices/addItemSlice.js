import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      state.value.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.value = state.value.filter((x) => {
        return x.id !== action.payload.id;
      });
    },
  },
});

export const { addItemToCart, deleteItemFromCart } = addItemSlice.actions;

export default addItemSlice.reducer;
