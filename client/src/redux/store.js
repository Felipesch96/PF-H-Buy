import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './slices/productsSlice'
import { cartSlice } from './slices/cartSlice'
import { usersSlice } from './slices/usersSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer,  
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
  blacklist : ['auth']
}

const persistedReducer = persistReducer(persistConfig, cartSlice.reducer)
export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: persistedReducer,
    user: usersSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  })

})

export const persistor = persistStore(store)