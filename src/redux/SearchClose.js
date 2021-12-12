import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchIsVisible: true,
}

export const searchIsCloseSlice = createSlice({
  name: 'searchIsClose',
  initialState,
  reducers: {
    setSearchisClose: (state , payload) => {
      state.searchIsVisible = payload.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSearchisClose } = searchIsCloseSlice.actions

export default searchIsCloseSlice.reducer