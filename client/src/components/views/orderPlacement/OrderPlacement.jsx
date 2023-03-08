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
    const orderId = useSelector((state) => state.cart.orderId);
    const { shippingInfo, totalItemsPrice } = useSelector(state => state.cart);
    const [mercadoPago, setMercadoPago] = useState({});
    const [order, setOrder] = useState([]);
    const location = useLocation();

    const getOrder = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/orders/order/${orderId}`)
        setOrder(data.items)        
    };

    const mpResponse = async () => {
        const { data } = await axios.get(`${REACT_APP_API_URL}/payment/${location.search}`);
        setMercadoPago(data)
    };

    const orderStatus  = async () => {
        await axios.put(`${REACT_APP_API_URL}/payment/${orderId}`, {
            status: mercadoPago.Status,
            payment_id: mercadoPago.Payment,
            payment_method: mercadoPago.Type,
        });
    };

    const successfulPurchase = async()=>{
        await axios.put(`${REACT_APP_API_URL}/orders/success/${orderId}`);
    };

    useEffect(() => {
        if (!mercadoPago.status || mercadoPago.status === 'approved') getOrder();
        if (location.search) mpResponse();
        if (mercadoPago.Status === 'approved'){
            orderStatus();
            successfulPurchase();
            dispatch(removeAll());
        } 
    }, [location.search, mercadoPago.Status]);

    const handleClick = () => { 
        if (mercadoPago.Status === "approved") history.push("/");
    };
    

    return(
        <main className="orderInfo">
            <section className="orderPreview">
            { mercadoPago.Status === "approved"
            ?  <h1 className="orderTitle">Order Completed</h1>
            : <h1 className="orderTitle">Order preview</h1>}
            <section className="shippingCard">
                <h4>Shipping</h4>
                 <p>Address {shippingInfo.address}</p>
                 <p>City {shippingInfo.city}</p>
                 <p>Postal Code {shippingInfo.postalCode}</p>
                 {mercadoPago.Status !== "approved" ? <Link className="edit" to="/shipping">Edit</Link> : null}
            </section>
            <section>
                <h4>Items</h4>
                <div>
                    {order?.map(el => (
                        <div className="finalOrderItems">
                            <img className="finalItemImage" src={el.product.img_url} alt={el.product.name}/>
                            <p>{el.product.name}</p>
                            <p>{el.product.quantity}</p>
                            <p>{el.product.price * el.quantity}$</p>
                        </div>
                    ))}
                 { mercadoPago.Status !== "approved" ? <Link className="edit" to="/shoppingCart">Edit</Link> : null}
                </div>
            </section>
            </section>
            <section className="summaryCard">
                <h4 className="orderSummary">Order Summary</h4>
                <div className="postOrder">
                    {mercadoPago.Status === "approved" ? <p className="paid">Status Paid</p> : <p className="pending">Status Pending</p>}

                    {mercadoPago.Status === "approved" 
                    ? <p className="postOrderInfo">Payment ID: {mercadoPago.Payment}</p> 
                    : null}

                    {mercadoPago.Status === "approved" 
                    ? <p className="postOrderInfo">Payment method: {mercadoPago.Type}</p> 
                    : null}
              
                    <b className="postOrderInfo">Total price: $ {totalItemsPrice}</b>
        
                 
                </div>
                {mercadoPago.Status !== "approved" ? <Payment />
                : <div><p>Thanks for your purchase!</p><button className="goBackHome" onClick={handleClick}>Go Home</button></div>}
            </section>            
        </main>
    );

};