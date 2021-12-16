import { createSlice } from '@reduxjs/toolkit'
import spacegray from '../images/Macbook/macbook-air-space-gray-select-201810.jpg'

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