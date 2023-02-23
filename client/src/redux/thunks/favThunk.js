import axios from "axios";
import { setFavs } from "../slices/favSlice";

export const getFavs = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/favorites/${id}`);
    dispatch(setFavs(data));
  };
};