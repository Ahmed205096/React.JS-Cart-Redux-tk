import { configureStore } from "@reduxjs/toolkit";
import ProductReducer from "./Slice/ProductReducer";
import CartReducer from "./Slice/CartReducer";

export const store = configureStore({
  reducer: {
    products: ProductReducer,
    cart: CartReducer,
  },
});
