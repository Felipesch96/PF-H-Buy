import axios from "axios";

export const deleteFavorite = (id) => {
    const {REACT_APP_API_URL} = process.env
    try {
        axios.delete(`${REACT_APP_API_URL}/favorites/${id}`)
    } catch (error) {
        console.log(error)
    }
    

} 
