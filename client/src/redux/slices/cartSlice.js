import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartList: [],
    amountOfItems: 0,
    shippingInfo: {},
    orderId: "",
  },
  reducers: {
    addToCart: (state, { payload }) => {
      const itemInCart = state.cartList.find(
        (item) => item._id === payload._id
      );
      if (itemInCart) {
        itemInCart.quantity++;
        state.amountOfItems++;
      } else {
        state.cartList.push({ ...payload, quantity: 1 });
        state.amountOfItems++;
      }
    },
    addOrderId: (state, { payload }) => {
      state.orderId = payload;
    },
    incrementQuantity: (state, { payload }) => {
      const item = state.cartList.find((item) => item._id === payload);
      item.quantity++;
      state.amountOfItems++;
    },
    decrementQuantity: (state, { payload }) => {
      const item = state.cartList.find((item) => item._id === payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
        state.amountOfItems--;
      }
    },
    removeFromCart: (state, { payload }) => {
      state.cartList = state.cartList.filter((item) => item._id !== payload.id);
      state.amountOfItems =
        state.amountOfItems - payload.quantity >= 0
          ? state.amountOfItems - payload.quantity
          : 0;
    },
    removeAll: (state) => {
      state.cartList = [];
      state.amountOfItems = 0;
      state.orderId = "";
    },
    setShipping: (state, { payload }) => {
      state.shippingInfo = payload;
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  removeAll,
  setShipping,
  addOrderId
} = cartSlice.actions;
