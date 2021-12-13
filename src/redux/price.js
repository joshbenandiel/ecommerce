import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  highestPrice: [],
  lowestPrice: []
}




export const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
      setHighestPrice: (state , payload) => {
        state.highestPrice = payload.payload
      },
      setLowestPrice: (state , payload) => {
        state.lowestPrice = payload.payload
      }
  }
})


export const { setHighestPrice , setLowestPrice} = priceSlice.actions

export default priceSlice.reducer