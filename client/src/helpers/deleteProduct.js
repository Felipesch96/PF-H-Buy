import axios from "axios";

export const deleteProduct = (_id) => {
          const {REACT_APP_API_URL} = process.env
  try {
    axios.delete(`${REACT_APP_API_URL}/products/${_id}`);
  } catch (error) {
    console.log(error);
  }
};
