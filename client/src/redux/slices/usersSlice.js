import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "userSlice",
  initialState: {
    users: [],
    user: {}
  },
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = payload;
    },
    setUser: (state, { payload }) => {
      state.user = payload
    },
    orderByName: (state, { payload }) => {
      payload === "A-Z"
        ? (state.users = [...state.users].sort((a, b) => a.name - b.name))
        : (state.users = [...state.users].sort(
            (a, b) => b.name - a.name
          ));
    },
    getUserByEmail: (state, { payload }) => {
      state.user = payload
    }
  },
});

export const {
  setUsers,
  setUser,
  orderByName,
  getUserByEmail
} = usersSlice.actions;
