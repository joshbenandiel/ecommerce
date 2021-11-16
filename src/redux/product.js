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
    }
  },
})


export const { addToCart } = productSlice.actions

export default productSlice.reducer