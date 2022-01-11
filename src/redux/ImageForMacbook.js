import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  image: {}
}

export const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {
    setDisplayItem: (state, action) => {
      state.image = action.payload
   
    },
  },
})

export const { setDisplayItem } = imageSlice.actions

export default imageSlice.reducer