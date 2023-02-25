import axios from "axios";
import { onLogin, onSignUp } from "../slices/authSlice";
import {
  setProducts,
  setCategories,
  detailProduct,
  setSearch,
  setFilter,
} from "../slices/productsSlice";
        const {REACT_APP_API_URL} = process.env
export const fetchProducts = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/products`);
    dispatch(setProducts(data));
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/categories`);
    dispatch(setCategories(data));
  };
};

export const fetchSearch = (value) => {
  return async (dispatch) => {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/products?name=${value}`
    );
    dispatch(setFilter(data));
  };
};

export const fetchSearchProductByCtg = (type) => {
  return async function (dispatch) {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/products?category=${type}`
    );
    dispatch(setFilter(data));
  };
};

// export const userLogin = (payload) => {
//   return async (dispatch) => {
//     const { data } = await axios.post("la ruta", payload);
//     dispatch(onLogin(data));
//   };
// };

// export const newUser = (payload) => {
//   return async (dispatch) => {
//     const { data } = await axios.post("la ruta", payload);
//     dispatch(onSignUp(data));
//   };
// };

export const fetchDetailProduct = (id) => {
  return async (dispatch) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/products/${id}`);
    dispatch(detailProduct(data));
  };
};
// export const clearDetailProduct = () => {
//   return clearDetail();
// };

export function getProductsByName(name) {
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch) {
    try {
      let productsByName = await axios.get(`${REACT_APP_API_URL}/products?name=${name}`, {});
      dispatch(setProducts(productsByName));
    } catch (error) {
      console.log(error);
    }
  };
};

export function getProductsByOrder(order) {
  return async function (dispatch) {
    try {
      let productsByOrder = await axios.get(`${REACT_APP_API_URL}/products?order=${order}`, {});
      return dispatch(setProducts(productsByOrder))
    } catch (error) {
      console.log(error);
    }
  }
};
