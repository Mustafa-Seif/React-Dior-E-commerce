import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  value: [],
};

export const addWishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    addItemToWish: (state, action) => {
      if (
        state.value.find((val) => val.id === action.payload.id) === undefined
      ) {
        state.value.push({ ...action.payload, quantity: 1 });
        // FIRE TOAST
        toast.success("The product added to wishes!", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } else {
        state.value.forEach((el) => {
          if (el.id === action.payload.id) {
            el.quantity++;
            // FIRE TOAST
            toast.info("Already exists at wishes!", {
              position: "bottom-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        });
      }
    },
    deleteItemFromWish: (state, action) => {
      state.value = state.value.filter((x) => {
        return x.id !== action.payload.id;
      });
        // FIRE TOAST
        toast.warning("Product is deleted from wishes!", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
    },
  },
});

export const { addItemToWish, deleteItemFromWish } = addWishSlice.actions;

export default addWishSlice.reducer;
