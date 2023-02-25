import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, incrementQuantity, removeAll, removeFromCart } from "../../redux/slices/cartSlice"
import axios from "axios"
import {FaTrash} from 'react-icons/fa'
import './cartCard.css'
export const CartCard = ({name, id, quantity, price}) => {
   const dispatch =  useDispatch()
   const updateCart = async () => {
    const { data } = await axios.get(`/api/products/${id}`);
    if(data.stock <= 0)  window.alert('No more product in stock')
    dispatch(incrementQuantity(id))
  };
    return(
        <main className="cartCards">
            <h1>{name}</h1>
            <h5> Price: {price * quantity}</h5>
        <div className="manageCartProduct" >
          <button className="quantityModderPlus" onClick={updateCart}>+</button>
            <p className="quan">{quantity}</p>
          <button className="quantityModderDel" onClick={() => dispatch(decrementQuantity(id))}>-</button>
        </div>
            <FaTrash className="remover" onClick={() => dispatch(removeFromCart({id, quantity}))}/>
        </main>
    )
}