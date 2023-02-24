import axios from "axios";
// import { onLogin, onSignUp } from "../slices/authSlice";
import {
  setProducts,
  setCategories,
  detailProduct,
  clearDetail,
  setFilter,
  setError,
  setFilterdemo,
  orderByName,
  clearFilter,
  orderByPrice,
  setFilterName,
  orderByScore,
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

export const fetchNewProducts = (form) => {
  return async (dispatch) => {
    try {
      await axios.post("http://localhost:3001/products", form);
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

export const fetchSearchInFilter = (data) => {
  return async function (dispatch) {
    try {
      dispatch(setFilterName(data));
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
  };
};

export const fetchOrderAlphabet = (data) => {
  return async function (dispatch) {
    try {
      dispatch(orderByName(data));
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
  };
};

export const fetchOrderPrice = (data) => {
  return async function (dispatch) {
    try {
      dispatch(orderByPrice(data));
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
  };
};

export const fetchOrderScore = (data) => {
  return async function (dispatch) {
    try {
      dispatch(orderByScore(data));
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
  };
};

export const fetchClearFilter = () => {
  return async function (dispatch) {
    try {
      dispatch(clearFilter());
    } catch (error) {
      dispatch(setError(error.response.data));
      console.log(error.response.data);
    }
  };
};

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
      let productsByName = await axios.get(
        `http://localhost:3001/products?name=${name}`
      );
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
