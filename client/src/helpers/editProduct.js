import axios from "axios";

export const editProduct = async (product) => {
          const {REACT_APP_API_URL} = process.env
  await axios.put(`${REACT_APP_API_URL}/products/${product._id}`, product);
};
