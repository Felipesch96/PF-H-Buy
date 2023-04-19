import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/productsSlice";
import { cartSlice } from "./slices/cartSlice";
import { usersSlice } from "./slices/usersSlice";
import { favSlice } from "./slices/favSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["auth"],
};

const persistedCart = persistReducer(persistConfig, cartSlice.reducer);
const persistedUser = persistReducer(persistConfig, usersSlice.reducer);

export const store = configureStore({
  reducer: {
    product: productsSlice.reducer,
    cart: persistedCart,
    user: persistedUser,
    favorite: favSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
