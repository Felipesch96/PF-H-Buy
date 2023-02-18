import axios from "axios"

export const editProduct = (id) => {
    axios.put('http://localhost:3001/products')

} 