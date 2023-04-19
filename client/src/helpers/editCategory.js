import axios from "axios";



export const editCategory = (category) => {
            const {REACT_APP_API_URL} = process.env
    axios.put(`${REACT_APP_API_URL}/categories/${category.id}`, category)
} 
