import axios from "axios";
import { setUsers, setUser, setCleanUser, setUserById } from "../slices/usersSlice";

const {REACT_APP_API_URL} = process.env

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/users`);
    dispatch(setUsers(data));
  };
};

export const fetchUserById = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/users/${id}`);
    dispatch(setUserById(data));
  };
};

export const newGoogleUser = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/users/google`,
        payload
      );
      dispatch(setUser(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const cleanUser = () => {
  return async (dispatch) => {
    try {
      dispatch(setCleanUser());
    } catch (error) {
      console.log(error);
    }
  };
};
