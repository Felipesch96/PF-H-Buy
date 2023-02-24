import axios from "axios";
// import { onLogin, onSignUp } from "../slices/authSlice";
import {
  setProducts,
  setCategories,
  detailProduct,
  clearDetail,
  setFilter,
  setError,
} from "../slices/productsSlice";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/products");
      dispatch(setProducts(data));
    } catch (error) {
      dispatch(setError(error.response.data));
    }
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("http://localhost:3001/categories");
      dispatch(setCategories(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const fetchSearch = (value) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/products?name=${value}`
      );
      dispatch(setFilter(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};

export const fetchSearchProductByCtg = (type) => {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/products?category=${type}`
      );
      dispatch(setFilter(data));
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
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
    try {
      const { data } = await axios.get(`http://localhost:3001/products/${id}`);
      dispatch(detailProduct(data));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
};
export const clearDetailProduct = () => {
  return (dispatch) => {
    dispatch(clearDetail());
  };
};

export function getProductsByName(name) {
  // trae los que incluyan name, puede ser mas de 1
  return async function (dispatch) {
    try {
      let productsByName = await axios.get(`http://localhost:3001/products?name=${name}`);
      dispatch(setProducts(productsByName));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}

export function getProductsByOrder(order) {
  return async function (dispatch) {
    try {
      let productsByOrder = await axios.get(
        `http://localhost:3001/products?order=${order}`,
        {}
      );
      return dispatch(setProducts(productsByOrder));
    } catch (error) {
      dispatch(setError(error.message));
    }
  };
}
