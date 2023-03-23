import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


export const getDataAsync = createAsyncThunk(
  "data/getDataAsync",
  async (args, thunkApi) => {
    const {rejectWithValue} = thunkApi;
    try {
      console.log(thunkApi)
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } 
    catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const getDataSlice = createSlice({
  name: "data",
  initialState: {
    productData: [],
    loading: false,
    error: null,
  },
  reducers: {
    // ...
  },
  extraReducers:{
    [getDataAsync.pending]:(state,action)=>{
        state.loading = true;
        state.error = null; 
    },
    [getDataAsync.fulfilled]:(state,action)=>{
        state.productData = action.payload;
        state.loading = false;
    },
    [getDataAsync.rejected]:(state,action)=>{
        state.loading = false;
        state.error = action.error.message;
       
    },
  }
});

export default getDataSlice.reducer;
