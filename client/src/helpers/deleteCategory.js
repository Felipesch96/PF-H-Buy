import axios from "axios";

export const deleteCategory = (id) => {
    const {REACT_APP_API_URL} = process.env
    try {
        axios.delete(`${REACT_APP_API_URL}/categories/${id}`)
    } catch (error) {
        console.log(error)
    }
    

} 
