import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterSlice'
import searchReduser from './searchSlice'
import productReduser from './productSlice'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReduser,
    product: productReduser
  },
})