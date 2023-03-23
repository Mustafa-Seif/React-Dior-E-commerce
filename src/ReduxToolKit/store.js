import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartSlice from './slices/cartSlice';
import addWishSlice from './slices/addWishSlice';
import authSlice from './slices/authSlice';
import totalSlice from './slices/totalSlice';
import { combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import getDataSlice from './slices/getDataSlice';
import getDataByIdSlice from './slices/getDataByIdSlice';
// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a Redux Persist reducer
const rootReducer =  combineReducers({
  cart: cartSlice,
  wish: addWishSlice,
  auth: authSlice,
  getAllTotal: totalSlice,
  data:getDataSlice,
  dataById:getDataByIdSlice
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunkMiddleware],
});

// Create a persisted store using the persistStore function
const persistedStore = persistStore(store);

export { store, persistedStore };