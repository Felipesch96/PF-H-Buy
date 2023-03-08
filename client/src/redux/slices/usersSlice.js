import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    userLocal: {},
    userById: {},
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setUser: (state, { payload }) => {
      state.userLocal = payload;
    },
    setLogedUser: (state, { payload }) => {
      state.userLocal = payload;
    },
    setCleanUser: (state) => {
      state.userLocal = {};
    },
    setUserById: (state) => {
      state.userById = {};
    },
    addNewAddress: (state, {payload}) => {
      state.userLocal.userAddress = payload
    },
    removeAddress: (state, {payload}) => {
      state.userLocal.userAddress = state.userLocal.userAddress.filter(adr => adr._id?.toString() !== payload)
    },
  },
});

export const { setUsers, setCleanUser, setUser, orderByName, setLogedUser, setUserById, removeAddress, addNewAddress } =
  usersSlice.actions;
