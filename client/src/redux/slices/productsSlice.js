import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "productSlice",
  initialState: {
    products: [],
    categories: [],
    search: [],
    filter: [],
    detailproduct: {},
    filterHelper: [],
    error: "",
  },
  reducers: {
    setProducts: (state, { payload }) => {
      state.products = payload;
    },
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setSearch: (state, { payload }) => {
      state.search = payload;
    },
    setFilter: (state, { payload }) => {
      state.filterHelper.length || state.filter.length
        ? (state.filterHelper = []) && (state.filter = payload)
        : (state.filter = payload);
    },
    setFilterdemo: (state, { payload }) => {
      state.filterHelper.length
        ? (state.filterHelper = [
            ...state.filterHelper.filter((Element) =>
              Element.name
                .toString()
                .toLowerCase()
                .includes(payload.toLowerCase())
            ),
          ])
        : state.filter.length
        ? (state.filterHelper = [
            ...state.filter.filter((Element) =>
              Element.name
                .toString()
                .toLowerCase()
                .includes(payload.toLowerCase())
            ),
          ])
        : (state.filter = [
            ...state.products.filter((Element) =>
              Element.name
                .toString()
                .toLowerCase()
                .includes(payload.toLowerCase())
            ),
          ]);
    },
    orderByName: (state, { payload }) => {
      if (state.filterHelper.length) {
        payload === "A-Z"
          ? (state.filterHelper = [...state.filterHelper].sort((a, b) =>
              a.name.localeCompare(b.name)
            ))
          : (state.filterHelper = [...state.filterHelper]
              .sort((a, b) => a.name.localeCompare(b.name))
              .reverse());
      } else if (state.filter.length) {
        payload === "A-Z"
          ? (state.filterHelper = [...state.filter].sort(
              (a, b) => a.name - b.name
            ))
          : (state.filterHelper = [...state.filter].sort(
              (a, b) => b.name - a.name
            ));
      } else {  
        payload === "A-Z"
          ? (state.filter = [...state.products].sort((a, b) => a.name - b.name))
          : (state.filter = [...state.products].sort(
              (a, b) => b.name - a.name
            ));
      }
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
    clearFilter: (state) => {
      state.filterHelper.length
        ? (state.filterHelper = []) && (state.filter = [])
        : (state.filter = []);
    },
    detailProduct: (state, { payload }) => {
      state.detailproduct = payload;
    },
    clearDetail: (state) => {
      state.detailproduct = {};
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
  },
});

export const {
  setProducts,
  setCategories,
  orderByName,
  orderByPrice,
  orderByReviews,
  detailProduct,
  clearDetail,
  setFilter,
  setFilterdemo,
  setError,
  clearFilter,
} = productsSlice.actions;
