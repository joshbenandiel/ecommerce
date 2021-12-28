import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  inch: '13-inch',
}

export const inchSlice = createSlice({
  name: 'inch',
  initialState,
  reducers: {
      setGetInches: ((state, payload) => {
        state.inch = payload.payload
      }) 
  }
})


export const { setGetInches } = inchSlice.actions

export default inchSlice.reducer