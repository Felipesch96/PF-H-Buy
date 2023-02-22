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
    orderByName: (state, { payload }) => {
      payload === "A-Z"
        ? (state.users = [...state.users].sort((a, b) => a.name - b.name))
        : (state.users = [...state.users].sort((a, b) => b.name - a.name));
    },
  },
});

export const { setUsers, setUser, orderByName, setLogedUser } =
  usersSlice.actions;
