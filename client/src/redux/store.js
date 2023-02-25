import { configureStore } from '@reduxjs/toolkit'
import { productsSlice } from './slices/productsSlice'
import { cartSlice } from './slices/cartSlice'
import { usersSlice } from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: cartSlice.reducer,
    user: usersSlice.reducer
  },
})