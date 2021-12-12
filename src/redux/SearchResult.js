import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  searchResult: '',
}

export const searchResultSlice = createSlice({
  name: 'searchResult',
  initialState,
  reducers: {
    handleSearchResult: (state , payload) => {
      state.searchResult = payload.payload
      console.log(payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { handleSearchResult } = searchResultSlice.actions

export default searchResultSlice.reducer