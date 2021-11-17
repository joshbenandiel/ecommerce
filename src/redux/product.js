import { createSlice } from '@reduxjs/toolkit'
import products from '../components/data/RecomendationsData'

const initialState = {
  products,
  cart: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, {payload}) => {
      const existingCart = state.cart;
      existingCart.push(payload);
      state.cart = existingCart;
    },
    removeToCart: (state, { payload }) => {
      const id = payload.id;
      const filtered = state.cart.filter((item) => item.id !== id)
      state.cart = filtered;
    }
  },
})


export const { addToCart , removeToCart } = productSlice.actions

export default productSlice.reducer