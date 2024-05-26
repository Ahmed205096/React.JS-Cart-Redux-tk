import { createAsyncThunk } from "@reduxjs/toolkit";

const API_URL = "https://fakestoreapi.com/products";

const getAPI = async () => {
  const request = await fetch(API_URL);
  const data = await request.json();
  return data;
};

export const getAllProductsAPI = createAsyncThunk(
  "ProductReducer/getAllProductsAPI",
  getAPI
);
