import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from '@mui/icons-material/Delete';


const initialState = {
  value: [],
};
export const addItemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      if (
        state.value.find((val) => val.id === action.payload.id) === undefined
      ) {
        state.value.push({ ...action.payload, quantity: 1 });
        // FIRE TOAST
        toast.success("The product added to cart !", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: <AddShoppingCartIcon></AddShoppingCartIcon>
        });
      } else {
        state.value.forEach((el) => {
          if (el.id === action.payload.id) {
            el.quantity++;
            // FIRE TOAST
            toast.info("Product is already exists at cart !", {
              position: "bottom-left",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
            });
          }
        });
      }
    },
    deleteItemFromCart: (state, action) => {
      state.value = state.value.filter((x) => {
        return x.id !== action.payload.id;
      });
        // FIRE TOAST
        toast.warning("Product is deleted from cart !", {
          position: "bottom-left",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          icon: <DeleteIcon></DeleteIcon>
        });
    },
    increaseQuantity: (state, action) => {
      state.value.map((x) => {
        if (x.id === action.payload.id) {
          x.quantity++;
        }
      });
    },
    decreaseQuantity: (state, action) => {
      state.value.map((x) => {
        if (x.id === action.payload.id) {
          if (x.quantity > 1) {
            x.quantity--;
          }
        }
      });
    },
  },
});

export const {
  addItemToCart,
  deleteItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} = addItemSlice.actions;

export default addItemSlice.reducer;
