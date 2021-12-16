import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  productItem: [],
}


export const productItemSlice = createSlice({
  name: 'productItem',
  initialState,
  reducers: {
      getProductItem: (state , payload)=> {
        state.productItem = payload.payload
        return state;
      }
  }
})


export const { getProductItem } = productItemSlice.actions


export default productItemSlice.reducer