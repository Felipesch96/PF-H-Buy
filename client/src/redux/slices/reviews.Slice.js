import { createSlice } from "@reduxjs/toolkit";

export const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState: {
    reviews: [],
    // amountOfItems: 0
  },
  reducers: {
    setReview: (state, { payload }) => {
      state.reviews = payload;
    },
  },
});

export const { setReview } = reviewSlice.actions;
