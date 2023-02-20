import axios from "axios";
import { onLogin, onSignUp } from "./slices/authSlice";
import {
  setProducts,
  setCategories,
  detailProduct,
} from "./slices/productsSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/products");
    dispatch(setProducts(data));
  };
};

export const fetchCategories = () => {
  return async(dispatch) => {
      const { data } = await axios.get("http://localhost:3001/categories");
      dispatch(setCategories(data))
  }
}

export const userLogin = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.post("la ruta", payload);
    dispatch(onLogin(data));
  };
};

export const newUser = (payload) => {
  return async (dispatch) => {
    const { data } = await axios.post("la ruta", payload);
    dispatch(onSignUp(data));
  };
};

export const fetchDetailProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`http://localhost:3001/products/${id}`);
    dispatch(detailProduct(data));
  };
};
// export const clearDetailProduct = () => {
//   return clearDetail();
// };
