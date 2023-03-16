import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import addItemSlice from './slices/addItemSlice';
import addWishSlice from './slices/addWishSlice';
import authSlice from './slices/authSlice';
import totalSlice from './slices/totalSlice';
import { combineReducers } from 'redux';
// Configure Redux Persist
const persistConfig = {
  key: 'root',
  storage,
};

// Create a Redux Persist reducer
const rootReducer =  combineReducers({
  cart: addItemSlice,
  wish: addWishSlice,
  auth: authSlice,
  getAllTotal: totalSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create a Redux store with the persisted reducer
const store = configureStore({
  reducer: persistedReducer,
});

// Create a persisted store using the persistStore function
const persistedStore = persistStore(store);

export { store, persistedStore };