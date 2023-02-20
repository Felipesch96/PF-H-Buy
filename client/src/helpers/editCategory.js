
import axios from "axios"

export const editCategory = (category) => {
    console.log(category)
    axios.put(`http://localhost:3001/categories/${category.id}`, category)
} 