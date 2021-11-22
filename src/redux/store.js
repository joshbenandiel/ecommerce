import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product"
import countReducer from './count';

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: countReducer
  },
})