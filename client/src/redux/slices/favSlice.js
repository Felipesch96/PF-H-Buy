import { createSlice } from '@reduxjs/toolkit';


export const favSlice = createSlice({
    name: 'favSlice',
    initialState: {
        favList: [],
        amountOfItems: 0
    },
    reducers: {
        setFavs: (state, { payload }) => {
            state.favList = payload;
          },
        
    }
});

export const { setFavs } = favSlice.actions;