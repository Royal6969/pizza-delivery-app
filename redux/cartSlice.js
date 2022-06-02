import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({ // I'm going to create a slice method
  // we have to create a cart slice, with a name, with a initial state and with its reducer
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    // we're going to pass a product to cart as a payload and we're going to take the quantity and the price
    addProduct: (state, action) => {
      state.products.push(action.payload) // we're going to pass our pizza details as payload 
      state.quantity += 1; // when user add a product, it's going to increase the quantity
      state.total += action.payload.price * action.payload.quantity; // at beginning out total number will be 0, 
    },
    // when we make our payments, we're going to go to the order page and we're going to reset our cart here so it's going to be 0 again
    reset: (state) => {
      state.products = [];
      state.quantity = 0;
      state.total = 0; 
    }
  }
});

export const { addProduct, reset } = cartSlice.actions;
export default cartSlice.reducer;