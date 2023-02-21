
import axios from "axios"

export const createProduct = async(productInfo) => {
    try {
        const product = await axios.post('http://localhost:3001/products', productInfo )
        console.log(product)
    } catch (error) {
        console.log(error)
    }
    
}


