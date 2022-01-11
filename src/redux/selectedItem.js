import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  selectedItem: 'Space Gray',
}

export const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState,
  reducers: {
    setSelectedItem: (state , payload) => {
      state.selectedItem = payload.payload
    },
  },
})


export const { setSelectedItem , setSelectedItemImg } = selectedItemSlice.actions

export default selectedItemSlice.reducer