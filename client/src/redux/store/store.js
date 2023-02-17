import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "../slices/productsSlice";
import logger from 'redux-logger';
import thunk from "redux-thunk";

const store = configureStore({
  reducer:{
    allProducts: productsSlice.reducer
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(thunk).concat(logger)
});

export default store;