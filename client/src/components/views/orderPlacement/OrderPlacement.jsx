import axios from "axios"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation } from "react-router"
import { Link } from "react-router-dom"
import { removeAll } from "../../../redux/slices/cartSlice"
import Payment from "../payment/payment"
import './orderPlacement.css'
const { REACT_APP_API_URL } = process.env;

export const OrderPlacement = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const orderId = useSelector((state) => state.cart.orderId)
    const { cartList, shippingInfo, totalItemsPrice } = useSelector(state => state.cart);
    const tax = totalItemsPrice * 0.15;
    const shippingPrice = 10;
    const finalPrice = tax + shippingPrice + totalItemsPrice;
    const [mercadoPago, setMercadoPago] = useState({})
    const location = useLocation();

    const mpResponse = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/payment/${location.search}`);
        setMercadoPago(data)
    }
    const orderStatus  = async () => {
        await axios.put(`${REACT_APP_API_URL}/payment/${orderId}`, {
            status: mercadoPago.Status,
            payment_id: mercadoPago.Payment,
            payment_method: mercadoPago.Type,
        });
    }

    
    useEffect(() => {
        if (location.search) mpResponse();
        if (mercadoPago.Status) orderStatus();
    }, [location.search, mercadoPago.Status]);

    const handleClick = () => { 
        if (mercadoPago.Status === "approved") dispatch(removeAll());
        history.push("/");
    }
 
    

    return(
        <main className="orderInfo">
            <section className="orderPreview">
            <h1 className="orderTitle">Order preview</h1>
            <section className="shippingCard">
                <h4>Shipping</h4>
                 <p>Address {shippingInfo.address}</p>
                 <p>City {shippingInfo.city}</p>
                 <p>Postal Code {shippingInfo.postalCode}</p>
                 {mercadoPago.Status !== "approved" ? <Link to="/shipping">Edit</Link> : null}
            </section>
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
            <section className="summaryCard">
                <h4>Order Summary</h4>
                <div>
                    {mercadoPago.Status === "approved" ? <p>Payment: Payed</p> : <p>Payment: Pending</p>}

                    {mercadoPago.Status === "approved" 
                    ? <p>Payment ID: {mercadoPago.Payment}</p> 
                    : null}

                    {mercadoPago.Status === "approved" 
                    ? <p>Payment method: {mercadoPago.Type}</p> 
                    : null}

                    <p>Shipping {shippingPrice}</p>
                    
                    <p>Taxes {tax}</p>
              
                    <p>Items {totalItemsPrice}</p>
            
                    <p>Total Price {finalPrice}</p>
                 
                </div>
                {mercadoPago.Status !== "approved" ? <Payment/> 
                : <div><p>Thanks for your purchase!</p><button onClick={handleClick}>Go Home</button></div>}
            </section>
            
        </main>
    )

}