import { createSlice } from '@reduxjs/toolkit'
import products from '../components/data/RecomendationsData'
import { josLog } from '.././utils/log'

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
      const itemInCart = state.cart.find(item => item.id == payload.id)

      if (itemInCart) {
        existingCart.map(item => {
          if (item.id == payload.id) {
            return {
              ...item,
              count: item.count += 1
            }
          } 

        })

      } else {

        const itemsWithCount = {
          ...payload,
          count: 1
        }
        existingCart.push(itemsWithCount);
      }



    },

    incrementProductCount: (state, payload) => {

      const existingCart = state.cart;
      
      const updatedList = existingCart.map((item) => {

        if (item.id == payload.payload.id) {
          return {
            ...item,
            count: item.count + 1
          }
        } else {
          return item
        }
      });

      state.cart = updatedList;
    },


    
    decrementProductCount: (state, payload) => {
      const existingCart = state.cart;
      
      const updatedList = existingCart.map((item) => {

        if (item.id == payload.payload.id) {
          return {
            ...item,
            count: item.count - 1
          }
        } else {
          return item
        }
      });

      state.cart = updatedList;
    },

    removeToCart: (state, { payload }) => {
      const id = payload.id;
      const filtered = state.cart.filter((item) => item.id !== id)
      state.cart = filtered;
    }
  },
})


export const { addToCart, incrementProductCount, removeToCart , decrementProductCount} = productSlice.actions

export default productSlice.reducer