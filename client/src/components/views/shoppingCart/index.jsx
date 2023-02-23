import { useSelector } from "react-redux"
import { CartCard } from "../../cartCard"

export const ShoppingCart = () => {
    const {totalPrice, cartList} = useSelector((state) => state.cart)
    console.log('items',cartList)
    return(
        <main>
            <h3>Your cart</h3>
            <h4>Total:{totalPrice}</h4>
            <ul>
                {cartList.map(item => (
                    <CartCard id={item._id} name={item.name} />
                ))}
            </ul>
        </main>
    )
}