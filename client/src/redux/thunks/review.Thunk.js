import axios from "axios";
import { setReview } from "../slices/reviews.Slice";
const { REACT_APP_API_URL } = process.env;

export const fetchReviews = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${REACT_APP_API_URL}/reviews`);
      dispatch(setReview(data));
    } catch (error) {
      return error;
    }
  };
};
export const postReviews = (form) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`${REACT_APP_API_URL}/reviews`, form);
      dispatch(data);
    } catch (error) {
      return error;
    }
  };
};
