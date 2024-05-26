import { createSlice } from "@reduxjs/toolkit";
import { getAllProductsAPI } from "../../APIs/getAllProductsAPI";

const ProductReducer = createSlice({
  name: "ProductReducer",
  initialState: [],
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllProductsAPI.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});


export default ProductReducer.reducer;