import axios from "axios";
import { setFavs } from "../slices/favSlice";
const { REACT_APP_API_URL } = process.env

export const getFavs = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/favorites`);
      dispatch(setFavs(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const addNewFavorite = (favorite) => {
  return async (dispatch) => {
    try {
      await axios.post(`${REACT_APP_API_URL}/favorites`, favorite);
    } catch (error) {
      console.log(error);
    };
  };
};