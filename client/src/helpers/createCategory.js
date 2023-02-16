import axios from "axios"

export const createCategory = async(categoryInfo) => {
    try {
        const category = await axios.post('la ruta', categoryInfo )
        console.log(category)
    } catch (error) {
        console.log(error)
    }
    
}