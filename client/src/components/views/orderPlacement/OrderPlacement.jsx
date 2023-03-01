import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import './orderPlacement.css'
export const OrderPlacement = () => {
    const {cartList, shippingInfo, paymentMethod, totalItemsPrice} = useSelector(state => state.cart)
    const tax = totalItemsPrice * 0.15
    const shippingPrice = 10
    const finalPrice = tax + shippingPrice + totalItemsPrice
    return(
        <main className="orderInfo">
            <section>
            <h1>Order preview</h1>
            <section>
                <h4>Shipping</h4>
                 <p>Address {shippingInfo.address}</p>
                 <p>City {shippingInfo.city}</p>
                 <p>Postal Code {shippingInfo.postalCode}</p>
                 <Link to="/shipping">Edit</Link>
            </section>
            {/* <section>
                <h4>Payment</h4>
            </section> */}
            <section>
                <h4>Items</h4>
                <div>
                    {cartList.map(el => (
                        <div className="finalOrderItems">
                            <p>{el.name}</p>
                            <p>{el.quantity}</p>
                            <p>{el.price * el.quantity}</p>
                        </div>
                    ))}
                 <Link to="/shoppingCart">Edit</Link>
                </div>
            </section>
            </section>
            <section>
                <h4>Order Summary</h4>
                <div>
                    <p>Shipping {shippingPrice}</p>
                    
                    <p>Taxes {tax}</p>
              
                    <p>Items {totalItemsPrice}</p>
            
                    <p>Total Price {finalPrice}</p>
                 
                </div>
                <button>Complete order</button>
            </section>
            
        </main>
    )

}