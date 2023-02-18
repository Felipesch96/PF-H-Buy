import axios from "axios"

export const deleteCategory = (id) => {
    try {
        axios.delete(`http://localhost:3001/categories/${id}`)
    } catch (error) {
        console.log(error)
    }
    

} 