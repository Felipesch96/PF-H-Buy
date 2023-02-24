import axios from "axios";
import {
  setUsers,
  setUser,
  setLogedUser,
  orderByName,
} from "../slices/usersSlice";
        const {REACT_APP_API_URL} = process.env
    

export const fetchUsers = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/users`);
    dispatch(setUsers(data));
  };
};



export const newUser = (payload) => {
  return async (dispatch) => {
    try {
      const {data} = await axios.post(`${REACT_APP_API_URL}/users`, payload);
      console.log(data);
      dispatch(setUser(data));
     
    } catch (error) {
      console.log(error);
    }
  };
};

export const userLogin = (payload) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(
        `${REACT_APP_API_URL}/users`,
        payload
        );
        dispatch(setLogedUser(data));
    } catch (error) {
      console.log('algo salio mal')
      console.log(error)
    }
     
    };
  };
  


