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
    topViews: [],
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
    setFilterName: (state, { payload }) => {
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
          ? (state.filterHelper = [...state.filter].sort((a, b) =>
              a.name.localeCompare(b.name)
            ))
          : (state.filterHelper = [...state.filter]
              .sort((a, b) => a.name.localeCompare(b.name))
              .reverse());
      } else {
        payload === "A-Z"
          ? (state.filter = [...state.products].sort((a, b) =>
              a.name.localeCompare(b.name)
            ))
          : (state.filter = [...state.products]
              .sort((a, b) => a.name.localeCompare(b.name))
              .reverse());
      }
    },
    orderByPrice: (state, { payload }) => {
      if (state.filterHelper.length) {
        payload === "lower_price"
          ? (state.filterHelper = [...state.filterHelper].sort(
              (a, b) => a.price - b.price
            ))
          : (state.filterHelper = [...state.filterHelper].sort(
              (a, b) => b.price - a.price
            ));
      } else if (state.filter.length) {
        payload === "lower_price"
          ? (state.filterHelper = [...state.filter].sort(
              (a, b) => a.price - b.price
            ))
          : (state.filterHelper = [...state.filter].sort(
              (a, b) => b.price - a.price
            ));
      } else {
        payload === "lower_price"
          ? (state.filter = [...state.products].sort(
              (a, b) => a.price - b.price
            ))
          : (state.filter = [...state.products].sort(
              (a, b) => b.price - a.price
            ));
      }
    },
    orderByScore: (state) => {
      if (state.filterHelper.length) {
        state.filterHelper = [...state.filterHelper].sort(
          (a, b) => b.score - a.score
        );
      } else if (state.filter.length) {
        state.filterHelper = [...state.filter].sort(
          (a, b) => b.score - a.score
        );
      } else {
        state.filter = [...state.products].sort((a, b) => b.score - a.score);
      }
    },
    setTopViews: (state) => {
      state.topViews = [...state.products].sort(
        (a, b) => b.visits.length - a.visits.length
      ).slice(0,5);
    },
    clearFilter: (state) => {
      state.filterHelper.length
        ? (state.filterHelper = []) && (state.filter = [])
        : (state.filter = []);
    },
    detailProduct: (state, { payload }) => {
      state.detailproduct = payload;
    },
    setError: (state, { payload }) => {
      state.error = payload;
    },
    clearDetail: (state) => {
      state.detailproduct = [];
    },
  },
});

export const {
  setProducts,
  setCategories,
  orderByName,
  orderByPrice,
  orderByScore,
  detailProduct,
  clearDetail,
  setFilter,
  setFilterName,
  setError,
  setTopViews,
  clearFilter,
} = productsSlice.actions;
