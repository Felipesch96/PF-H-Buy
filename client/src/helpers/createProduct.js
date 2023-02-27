
import axios from "axios"

export const createProduct = async(productInfo) => {
        const {REACT_APP_API_URL} = process.env
    try {
        const product = await axios.post(`${REACT_APP_API_URL}/products`, productInfo )
        console.log(product)
    } catch (error) {
        console.log(error)
    }
    
}


