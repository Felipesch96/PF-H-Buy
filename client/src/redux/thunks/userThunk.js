import axios from "axios";
import { onLogin, onSignUp } from "../slices/authSlice";
import {
  setUsers,
  setUser,
  orderByName,
} from "../slices/usersSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/users");
    dispatch(setUsers(data));
  };
};

export const userLogin = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.post("la ruta", payload);
    dispatch(onLogin(data));
  };
};

export const newUser = (payload) => {
  return async (dispatch) => {
    try {
      const userCreated = await axios.post("http://localhost:3001/users", payload);
      console.log(userCreated.data);
      // dispatch(setUser(userCreated.data));
      dispatch(getUserByEmail(userCreated.data.email));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getUserByEmail = (payload) => {
  return async (dispatch) => {
    try {
      const usuarioPorEmail = await axios.get("http://localhost:3001/users", payload);
      console.log(usuarioPorEmail);
      dispatch(setUser(usuarioPorEmail.data))
    } catch (error) {
      console.log(error);
    }

  };
};