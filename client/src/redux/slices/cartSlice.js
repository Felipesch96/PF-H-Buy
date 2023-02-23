import { createSlice } from '@reduxjs/toolkit';

// const fetchFromLocalStorage = () => {
//     let cart = localStorage.getItem('cart');
//     if(cart){
//         return localStorage.getItem('cart');
//     } else {
//         return [];
//     }
// }
export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartList: [],
        amountOfItems: 0,
        totalPrice: 0
    },
    reducers: {
        addToCart: (state, {payload}) => {
            state.cartList = [...state.cartList, payload]
        },
        removeFromCart: (state, {payload}) => {
            state.cartList = state.cartList.filter(itm => itm._id !== payload)
        },
        removeAll: (state) => {
            state.cartList = [];
            localStorage.setItem('cart',state.cartList);
        }
    }
});

  export const { addToCart, removeFromCart, removeAll } = cartSlice.actions;