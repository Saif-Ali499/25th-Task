import { createSlice } from "@reduxjs/toolkit";
import { products } from "../data/Products";


const initialState = {
  productArray: products,
  cart: JSON.parse(localStorage.getItem('cart')) || [],
  totalCost: JSON.parse(localStorage.getItem('totalCost')) || 0,
};


export const produceSlice = createSlice({
  name: "ECom",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image } = action.payload;
      // Check if the item is already in the cart
      const existingIndex = state.cart.findIndex(
        (product) => product.id === id
      );

      if (existingIndex !== -1) {
        // If the item exists, update the quantity
        state.cart[existingIndex].quantity += 1;
      } else {
        // If the item doesn't exist, add it to the cart
        const item = { id, title, price, quantity: 1, image };
        state.cart.push(item);
      }

      // Update the totalCost
      state.totalCost = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    removeFromCart: (state, action) => {
      const ItemId = action.payload;
      const index = state.cart.findIndex((product) => product.id === ItemId);
      const item = state.cart[index]
      if (item.quantity === 1) {
        state.cart.splice(index,1)
      } else {
        state.cart[index].quantity -= 1
      }
      state.totalCost = state.cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
    makeCartEmpty: (state, action) => {
      state.cart = [];
      state.totalCost = 0;
    },
    
  },
});

export const { addToCart, removeFromCart, makeCartEmpty } =
  produceSlice.actions;

export default produceSlice.reducer;
