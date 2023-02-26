import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeAll } from "../../../redux/slices/cartSlice";
import CartCard from "../../CartCard/CartCard";
import Login from "../../buttons/Login/Login";
import "./ShoppingCart.css";
import { useEffect } from "react";
import { newGoogleUser } from "../../../redux/thunks/userThunk";



export default function ShoppingCart() {
  const { amountOfItems, cartList } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const buyer = useSelector((state) => state.user.userLocal);
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalPrice = 0;
    cartList.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };

  const productList = cartList.map((element) => {
    return {
      product: element._id,
      quantity: element.quantity,
    }
  });

  useEffect(() => {
    if (!buyer._id) dispatch(newGoogleUser())
  },[buyer, dispatch])

  const handleCheckout = async() => {
    if (!buyer._id) return alert ("Please LOGIN");
    const total = getTotal();
    const data = {
      buyer : buyer._id,
      cartItems: productList,
      totalPrice: total, 
    }
    await axios.post(`http://localhost:3001/orders/`, data);    
    dispatch(removeAll());
    history.push("/");
    alert("COMPRA REALIZADA CON EXITO");

  };

  return (
    <main className="mainCart">
      <section>
        <h3>Your cart</h3>
        <ul className="cartCardsList">
          {cartList.map((item) => (
            <CartCard
              id={item._id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              key={item._id}
            />
          ))}
        </ul>
        <button className="clearCart" onClick={() => dispatch(removeAll())}>
          Remove All
        </button>
      </section>
      <section className="cartOrder">
        <h4>{amountOfItems} items </h4>
        <h4>Total: {getTotal()}</h4>
        {user && isAuthenticated ? (
          <button className="checkoutButton" onClick={handleCheckout}>
            buy my products
          </button>
        ) : (
          <>
            <span>Please Login And Verify Your Acount</span>{" "}
            <Login message="Login" />
          </>
        )}
      </section>
    </main>
  );
}
