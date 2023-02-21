import axios from "axios"

export const editProduct = (product) => {
    console.log(product)
    axios.put(`http://localhost:3001/products/${product.id}`, product)

} 