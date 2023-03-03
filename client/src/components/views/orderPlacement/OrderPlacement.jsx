import { useSelector } from "react-redux"
import { Link, useHistory } from "react-router-dom"
import './orderPlacement.css'
import Payment from "../payment/payment"
import { useEffect } from "react"

export const OrderPlacement = () => {
    const {cartList, shippingInfo, paymentMethod, totalItemsPrice} = useSelector(state => state.cart)
    const { _id } = useSelector(state => state.user.userLocal)
    const history = useHistory();
    const tax = totalItemsPrice * 0.15
    const shippingPrice = 10
    const finalPrice = tax + shippingPrice + totalItemsPrice
    useEffect(()=>{
        if(!_id) history.push('/shoppingCart')
      }, [])

    return(
        <main className="orderInfo">
            <section className="orderPreview">
            <h1 className="orderTitle">Order preview</h1>
            <section className="shippingCard">
                <h4>Shipping</h4>
                 <p>Address {shippingInfo.address}</p>
                 <p>City {shippingInfo.city}</p>
                 <p>Postal Code {shippingInfo.postalCode}</p>
                 <Link className="edit" to="/shipping">Edit</Link>
            </section>
            <section className="itemsCard">
                <h4>Items</h4>
                <div>
                    {cartList.map(el => (
                        <div className="finalOrderItems">
                            <p>{el.name}</p>
                            <p>{el.quantity}</p>
                            <p>{el.price * el.quantity}</p>
                        </div>
                    ))}
                 <Link className="edit"  to="/shoppingCard">Edit</Link>
                </div>
            </section>
            </section>
            <section className="summaryCard">
                <h4>Order Summary</h4>
                <div>
                    <p>Shipping {shippingPrice}</p>
                    
                    <p>Taxes {tax}</p>
              
                    <p>Items {totalItemsPrice}</p>
            
                    <p>Total Price {finalPrice}</p>
                 
                </div>
                <Payment/>
            </section>
            
        </main>
    )

}