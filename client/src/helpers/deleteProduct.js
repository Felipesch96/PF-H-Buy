import axios from "axios";

export const deleteProduct = (_id) => {
  try {
    axios.delete(`http://localhost:3001/products/${_id}`);
  } catch (error) {
    console.log(error);
  }
};
