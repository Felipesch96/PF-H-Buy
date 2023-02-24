import axios from "axios";

export const deleteCategory = async (id) => {
  try {
    await axios.delete(`http://localhost:3001/categories/${id}`);
  } catch (error) {
    console.log(error);
  }
};
