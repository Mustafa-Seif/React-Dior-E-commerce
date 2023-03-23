import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataAsyncById = createAsyncThunk(
  "dataById/getDataAsyncById",
  async (args, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${args.id}`);
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const getDataByIdSlice = createSlice({
  name: "dataById",
  initialState: {
    productDataById: {},
    loadingById: false,
    errorById: null,
  },
  reducers: {
    // ...
  },
  extraReducers: {
    [getDataAsyncById.pending]: (state, action) => {
      state.loadingById = true;
      state.errorById = null;
    },
    [getDataAsyncById.fulfilled]: (state, action) => {
      state.productDataById = action.payload;
      state.loadingById = false;
    },
    [getDataAsyncById.rejected]: (state, action) => {
      state.loadingById = false;
      state.errorById = action.error.message;
    },
  },
});

export default getDataByIdSlice.reducer;
