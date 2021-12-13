import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./product"
import countReducer from './count';
import searchReducer from './SearchClose'
import searchResultReducer from './SearchResult'
import selectedCheckboxReducer from './SelectedCheckBox'
import priceReducer from './price'

export const store = configureStore({
  reducer: {
    product: productReducer,
    counter: countReducer,
    search: searchReducer,
    searchResult: searchResultReducer,
    selectedCheckbox: selectedCheckboxReducer,
    price: priceReducer
  },
})