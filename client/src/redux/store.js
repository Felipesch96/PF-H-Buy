import { configureStore } from '@reduxjs/toolkit'
import { cartSlice } from './slices/cartSlice'
import { favSlice } from './slices/favSlice'
import { productsSlice } from './slices/productsSlice'
import { usersSlice } from './slices/usersSlice'

export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: cartSlice.reducer,
    user: usersSlice.reducer,
    fav: favSlice.reducer
  },
})