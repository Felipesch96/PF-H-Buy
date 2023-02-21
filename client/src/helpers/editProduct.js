import axios from "axios";

export const editProduct = async (product) => {
    console.log(product)
  await axios.put(`http://localhost:3001/products/${product._id}`, product);
};
