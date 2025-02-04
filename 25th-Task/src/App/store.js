import { configureStore } from "@reduxjs/toolkit";
import { produceSlice } from "../Features/productSlice";

const store = configureStore({
  reducer: produceSlice.reducer,
});

store.subscribe(() => {
  const state = store.getState();
  const totalCost = state.totalCost;  
  const cart = state.cart;
  localStorage.setItem("totalCost",JSON.stringify(totalCost))
  localStorage.setItem("cart", JSON.stringify(cart));
});

export default store;
