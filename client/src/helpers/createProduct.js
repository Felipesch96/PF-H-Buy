
import axios from "axios"

export const createProduct = async(productInfo) => {
    try {
        const product = await axios.post('la ruta', productInfo )
        console.log(product)
    } catch (error) {
        console.log(error)
    }
    
}


