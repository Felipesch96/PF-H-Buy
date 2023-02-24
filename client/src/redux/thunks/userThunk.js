import axios from "axios";
import {
  setUsers,
  setUser,
  setLogedUser,
} from "../slices/usersSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/users");
    dispatch(setUsers(data));
  };
};

export const newUser = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users", payload);
      dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const newGoogleUser = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        "http://localhost:3001/users/google",
        payload
      );
      dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLogin = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post("http://localhost:3001/users", payload);
      dispatch(setLogedUser(data));
    } catch (error) {
      console.log("algo salio mal");
      console.log(error);
    }
  };
};
