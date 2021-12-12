import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  selectedCheckbox: '',
}

export const selectedCheckboxSlice = createSlice({
  name: 'selectedCheckbox',
  initialState,
  reducers: {
    setSelectedCheckbox: (state , payload) => {
      state.selectedCheckbox = payload.payload

    }
  },
})

// Action creators are generated for each case reducer function
export const { setSelectedCheckbox } = selectedCheckboxSlice.actions

export default selectedCheckboxSlice.reducer