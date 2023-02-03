import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
};

export const addItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
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
    deleteItemFromCart: (state, action) => {
      state.value = state.value.filter((x) => {
        return x.id !== action.payload.id;
      });
    },
    increaseQuantity:(state, action)=>{
       state.value.map((x) => {
        if(x.id === action.payload.id){
               x.quantity++;
        } 
      });
    },
    decreaseQuantity:(state, action)=>{
       state.value.map((x) => {
        if(x.id === action.payload.id){
          if(x.quantity>1){
            x.quantity--;
          }
        } 
      });
    }
  },
});

export const { addItemToCart, deleteItemFromCart,increaseQuantity,decreaseQuantity } = addItemSlice.actions;

export default addItemSlice.reducer;
