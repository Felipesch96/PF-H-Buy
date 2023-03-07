import axios from "axios"

export const createCategory = async(categoryInfo) => {
    const {REACT_APP_API_URL} = process.env
    try {
        const category = await axios.post(`${REACT_APP_API_URL}/categories`, categoryInfo )
    } catch (error) {
        console.log(error)
    }
    
}