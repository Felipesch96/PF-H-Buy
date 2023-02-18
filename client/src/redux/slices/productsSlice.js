import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    categories: [],
    detailproduct: {},
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    orderByName: (state, { payload }) => {
      payload === "A-Z"
        ? (state.products = [...state.products].sort((a, b) => a.name - b.name))
        : (state.products = [...state.products].sort(
            (a, b) => b.name - a.name
          ));
    },
    orderByPrice: (state, { payload }) => {
      payload === "incremental"
        ? (state.products = [...state.products].sort(
            (a, b) => a.price - b.price
          ))
        : (state.products = [...state.products].sort(
            (a, b) => b.price - a.price
          ));
    },
    orderByReviews: (state, { payload }) => {
      payload === "incremental"
        ? (state.products = [...state.products].sort(
            (a, b) => a.reviews - b.reviews
          ))
        : (state.products = [...state.products].sort(
            (a, b) => b.reviews - a.reviews
          ));
    },

    detailProduct: (state, { payload }) => {
      state.detailproduct = payload;
    },
    // clearDetail: (state) => {
    //   state.detailproduct = {};
    // },
  },
});

export const {
  setProducts,
  setCategories,
  orderByName,
  orderByPrice,
  orderByReviews,
  detailProduct,
} = productsSlice.actions;
