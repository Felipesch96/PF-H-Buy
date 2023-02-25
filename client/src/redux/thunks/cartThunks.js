import axios from "axios";

import { addToCart } from "../slices/cartSlice";

export const fetchToCart = async(id) => {
    return (dispatch) => {
        const {data} = axios.get(`ruta/${id}`)

        dispatch(addToCart(data))
    }
}