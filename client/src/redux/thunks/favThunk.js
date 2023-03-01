import axios from "axios";
import { setFavs } from "../slices/favSlice";
const {REACT_APP_API_URL} = process.env

export const getFavs = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/favorites/${id}`);
    dispatch(setFavs(data));
  };
};