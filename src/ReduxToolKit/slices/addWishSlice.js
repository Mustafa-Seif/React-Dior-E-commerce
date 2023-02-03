import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addWishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addItemToWish: (state, action) => {
      if( state.value.find((val)=>val.id ===action.payload.id) === undefined){
        state.value.push({...action.payload,quantity:1});
      }else{
        state.value.forEach((el)=>{
          if (el.id === action.payload.id){
            el.quantity++;
          }
        })
      }
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
