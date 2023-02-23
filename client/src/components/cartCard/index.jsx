import { useDispatch, useSelector } from "react-redux"
import { removeAll, removeFromCart } from "../../redux/slices/cartSlice"

export const CartCard = ({name, id}) => {
   const dispatch =  useDispatch()
    return(
        <main>
            <h1>{name}</h1>
            <button onClick={() => dispatch(removeFromCart(id))}>Remove one item</button>
            <button onClick={() => dispatch(removeAll())}>Remove all items</button>
        </main>
    )
}