import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
    name: "productSlice",
    initialState: {
      products: []
    },
    reducers: {
      setProducts: (state, {payload}) => {
        state.products = payload;
      },
      orderByName: (state, {payload}) => {
        payload === 'A-Z' ? state.products = [...state.products].sort((a,b) => a.name-b.name) :
        state.products = [...state.products].sort((a,b) => b.name-a.name)
      },
      orderByPrice: (state, {payload}) => {
        payload === 'incremental' ? state.products = [...state.products].sort((a,b) => a.price-b.price) :
        state.products = [...state.products].sort((a,b) => b.price-a.price)
      },
      orderByReviews: (state, {payload}) => {
        payload === 'incremental' ? state.products = [...state.products].sort((a,b) => a.reviews-b.reviews) :
        state.products = [...state.products].sort((a,b) => b.reviews-a.reviews)
      }

    }
  });


export const {setProducts , orderByName , orderByPrice , orderByReviews} = productsSlice.actions