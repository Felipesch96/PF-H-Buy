import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cartSlice',
    initialState: {
        cartList: [],
        amountOfItems: 0
    },
    reducers: {

    }
});

 // export const {  } = cartSlice.actions;