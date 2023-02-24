import axios from "axios";

export const editCategory = async (category) => {
  await axios.put(`http://localhost:3001/categories/${category.id}`, category);
};
