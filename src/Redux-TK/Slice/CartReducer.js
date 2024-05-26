import { createSlice } from "@reduxjs/toolkit";

const CartReducer = createSlice({
  name: "CartReducer",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
        state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    clear: (state, action) => {
      return [];
    },
  },
});

export default CartReducer.reducer;
export const { addToCart, removeFromCart, clear } = CartReducer.actions;
