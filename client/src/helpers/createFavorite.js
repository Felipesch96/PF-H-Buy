import axios from "axios"

export const createFavorite = async(favoriteInfo) => {
    const {REACT_APP_API_URL} = process.env
    try {
        const favorite = await axios.post(`${REACT_APP_API_URL}/favorites`, favoriteInfo)
        console.log(favorite)
    } catch (error) {
        console.log(error)
    }
    
}