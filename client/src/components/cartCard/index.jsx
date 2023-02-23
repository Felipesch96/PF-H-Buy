import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, incrementQuantity, removeAll, removeFromCart } from "../../redux/slices/cartSlice"
import axios from "axios"
export const CartCard = ({name, id, quantity, price}) => {
   const dispatch =  useDispatch()
   const updateCart = async () => {
    const { data } = await axios.get(`/api/products/${id}`);
    if(data.stock <= 0)  window.alert('No more product in stock')
    dispatch(incrementQuantity(id))
  };
    return(
        <main>
            <h1>{name}</h1>
            <h5> price: {price * quantity}</h5>
            <div >
          <button onClick={updateCart}>+</button>
            <p>{quantity}</p>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        </div>
            <button onClick={() => dispatch(removeFromCart({id, quantity}))}>Remove item</button>
        </main>
    )
}