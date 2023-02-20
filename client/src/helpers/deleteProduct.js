import axios from "axios"

export const deleteProduct = (id) => {
    try {
        axios.put(`http://localhost:3001/products/${id}`)
    } catch (error) {
        console.log(error)
    }

} 