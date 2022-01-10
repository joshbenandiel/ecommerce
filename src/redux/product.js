import { createSlice, current } from '@reduxjs/toolkit'
import products from '../components/data/RecomendationsData'
import { josLog } from '.././utils/log'
import price from './price'

const initialState = {
  products,
  cart: [],
  totalPrice: [],
  total: [],
  count: 1
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addCart: (state, payload) => {
      const cartList = state.cart
      console.log(current(cartList))
      const item = payload.payload
      state.totalPrice.push(payload.payload.price)
      const itemInCart = state.cart.find(cart => cart.id == item.id)

      if(itemInCart){
        cartList.map(cart => {
          if(cart.id == item.id){
            cart.count += 1
          }
        })
      } else {
        let cartListWithCount = {
          ...item,
          count: 1,
          totalPrice: 0
        }
        cartList.push(cartListWithCount)
      }
      
      
      
      



    },
    removeToCart: (state, payload) => {
      const id = payload.payload.id
      const filtered = state.cart.filter(item => item.id !== id)
      state.cart = filtered
    },
    getTotal: (state, payload) => {
      const updatedPrice = payload.payload
      state.total.push(updatedPrice)
    },
    setQuantityItemCart: (state, payload) => {
      const cart = state.cart.map(item => {
        if(item.id == payload.payload.id){
          return {
            ...item,
            count: payload.payload.quantity,
            totalPrice: payload.payload.quantity*item.price
          }
        } else {
          return item;
        }
      })
      state.cart = cart;
    }
    
  },
})


export const { addCart, removeToCart, getTotal , setQuantityItemCart} = productSlice.actions

export default productSlice.reducer