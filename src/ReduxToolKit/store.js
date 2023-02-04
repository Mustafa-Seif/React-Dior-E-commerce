import { configureStore } from '@reduxjs/toolkit'
import addItemSlice from './slices/addItemSlice'
import addWishSlice from './slices/addWishSlice'
import authSlice from './slices/authSlice'
import totalSlice from './slices/totalSlice'

export const store = configureStore({
  reducer: {
    cart:addItemSlice,
    wish:addWishSlice,
    auth:authSlice,
    getAllTotal:totalSlice,
  },
})

