import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    userLocal: {},
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
  },
});

export const { setUsers, setCleanUser, setUser, orderByName, setLogedUser } =
  usersSlice.actions;
