import axios from "axios";
import {
  setUsers,
  setUser,
} from "../slices/usersSlice";

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/users");
    dispatch(setUsers(data));
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
