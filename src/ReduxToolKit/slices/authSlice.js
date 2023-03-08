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
      if (state) {
        // FIRE TOAST
        toast.success("Welcome", {
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
      // else if(!state){
      //     // FIRE TOAST
      //     toast.info("sign out", {
      //       position: "bottom-left",
      //       autoClose: 1000,
      //       hideProgressBar: false,
      //       closeOnClick: true,
      //       pauseOnHover: true,
      //       draggable: true,
      //       progress: undefined,
      //       theme: "colored",
      //     });
      // }
    },
  },
});

export const { isloged } = authSlice.actions;

export default authSlice.reducer;
