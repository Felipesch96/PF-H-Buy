import axios from "axios"

export const deleteCategory = (id) => {
    try {
        axios.put(`http://localhost:3001/categories/${id}`)
    } catch (error) {
        console.log(error)
    }
    

} 