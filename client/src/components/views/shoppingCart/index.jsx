import { useDispatch, useSelector } from "react-redux"
import { CartCard } from "../../cartCard"
import { removeAll } from "../../../redux/slices/cartSlice"

export const ShoppingCart = () => {
    const {amountOfItems, cartList} = useSelector((state) => state.cart)
    console.log('items',cartList)
    const dispatch = useDispatch()
    const getTotal = () => {
        let totalPrice = 0
        cartList.forEach(item => {
          totalPrice += item.price * item.quantity
        })
        return totalPrice
      }
    return(
        <main>
            <h3>Your cart</h3>
            <h4>{amountOfItems} items </h4>
            <h4>Total:{getTotal()}</h4>
            <ul>
                {cartList.map(item => (
                    <CartCard id={item._id} name={item.name} quantity={item.quantity} price={item.price} key={item._id}/>
                ))}
            </ul>
            <button onClick={()=> dispatch(removeAll()) }>Clear</button>
        </main>
    )
}