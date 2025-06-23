import { createSlice } from "@reduxjs/toolkit";
import { CartState } from "../../models/data/cartState";

const initialState: CartState = {
  cart: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.id);
      if (index > -1) {
        state.cart[index].count++;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
      state.totalPrice += action.payload.price;
    },

    incrementProduct: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.count += 1;
        state.totalPrice += product.price;
      }
    },

    decrementProduct: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        product.count -= 1;
        state.totalPrice -= product.price;

        if (product.count <= 0) {
          state.cart = state.cart.filter(item => item.id !== action.payload.id);
        }
      }
    },

    deleteToCart: (state, action) => {
      const product = state.cart.find(item => item.id === action.payload.id);
      if (product) {
        state.totalPrice -= product.price * product.count;
        state.cart = state.cart.filter(item => item.id !== action.payload.id);
      }
    },
  },
});

export const {
  addToCart,
  deleteToCart,
  incrementProduct,
  decrementProduct,
} = cartSlice.actions;

export default cartSlice.reducer;
