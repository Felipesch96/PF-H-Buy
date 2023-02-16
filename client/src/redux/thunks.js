import axios from 'axios'
import { onLogin, onSignUp } from './slices/authSlice';
import { setProducts } from './slices/productsSlice';



export const fetchProducts = () => {
    return async(dispatch) => {
        const { data } = await axios.get("la ruta");
        dispatch(setProducts(data))
    }
}
export const userLogin = (payload) => {
    return async (dispatch) => {
        const { data } = await axios.post(
        "la ruta",
        payload
        );
        dispatch(onLogin(data));
      };
    };
    
    
    
export const newUser = (payload) => {
      return async (dispatch) => {
        const { data } = await axios.post(
          "la ruta",
          payload
        );
        dispatch(onSignUp(data));
      };
    };