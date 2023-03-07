import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "productSlice",
  initialState: {
    categories: [],
    products: [],
    filters: {},
    order: { by: "name", direction: "asc" },
    detailproduct: {},
    topViews: [],
    error: "",
  },
  reducers: {
    setCategories: (state, { payload }) => {
      state.categories = payload;
    },
    setProducts: (state, { payload }) => {
      const { filters, order, products } = payload;
      if (products) {
        state.products = products;
      }
      state.filters = filters;
      state.order = order;
    },
    detailProduct: (state, { payload }) => {
      state.detailproduct = payload;
    },
    
    clearDetail: (state) => {
      state.detailproduct = [];
    },
    setTopViews: (state) => {
        state.topViews = [...state.products]
          .sort((a, b) => b.visits.length - a.visits.length)
          .slice(0, 5);
      },
      setError: (state, { payload }) => {
        state.error = payload;
      },
  },
});

export const {
  setTopViews,
  setProducts,
  setCategories,
  detailProduct,
  clearDetail,
  setError,
} = productsSlice.actions;
