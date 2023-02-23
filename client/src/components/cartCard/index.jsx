import { useDispatch, useSelector } from "react-redux"
import { decrementQuantity, incrementQuantity, removeAll, removeFromCart } from "../../redux/slices/cartSlice"

export const CartCard = ({name, id, quantity, price}) => {
   const dispatch =  useDispatch()
    return(
        <main>
            <h1>{name}</h1>
            <h5> price: {price * quantity}</h5>
            <div >
          <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
            <p>{quantity}</p>
          <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
        </div>
            <button onClick={() => dispatch(removeFromCart({id, quantity}))}>Remove item</button>
        </main>
    )
}