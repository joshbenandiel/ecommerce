import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedPhone: '6.1-inch-display-64gb-purple'
}

export const selectedPhoneSlice = createSlice({
  name: 'selectedPhone',
  initialState,
  reducers: {
    setSelectedPhone: (state , payload) => {
      state.selectedPhone = payload.payload
    },
  },
})


export const { setSelectedPhone } = selectedPhoneSlice.actions

export default selectedPhoneSlice.reducer