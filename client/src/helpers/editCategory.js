
import axios from "axios"

export const editCategory = (id) => {
    axios.put('http://localhost:3001/categories')
} 