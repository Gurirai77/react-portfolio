import { configureStore } from '@reduxjs/toolkit'
import clientSlice from './slice/clientSlice'

export const store = configureStore({
  reducer: {
   client:clientSlice


  },
})