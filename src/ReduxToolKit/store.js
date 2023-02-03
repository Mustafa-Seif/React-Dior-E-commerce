import { configureStore } from '@reduxjs/toolkit'
import addItemSlice from './slices/addItemSlice'
import addWishSlice from './slices/addWishSlice'
import authSlice from './slices/authSlice'


export const store = configureStore({
  reducer: {
    cart:addItemSlice,
    wish:addWishSlice,
    auth:authSlice,
  },
})

