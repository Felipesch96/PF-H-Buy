import axios from "axios"

export const createCategory = async(categoryInfo) => {
    try {
        const category = await axios.post('http://localhost:3001/categories', categoryInfo )
        console.log(category)
    } catch (error) {
        console.log(error)
    }
    
}