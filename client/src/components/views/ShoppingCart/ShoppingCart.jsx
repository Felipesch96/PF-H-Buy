import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addOrderId, removeAll, setPrice } from "../../../redux/slices/cartSlice";
import Login from "../../buttons/Login/Login";
import CartCard from "../../CartCard/CartCard";
import "./ShoppingCart.css";
const { REACT_APP_API_URL } = process.env;

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
    dispatch(setPrice(totalPrice))
    return totalPrice;
  };

  const productList = cartList.map((element) => {
    return {
      product: element._id,
      quantity: element.quantity,
    };
  });

  const handleCheckout = async () => {
    if (!buyer._id) return alert("Please LOGIN");
    const total = getTotal();
    const data = {
      buyer: buyer._id,
      cartItems: productList,
      totalPrice: total,
    };
    const response = await axios.post(`${REACT_APP_API_URL}/orders/`, data);
    dispatch(addOrderId(response.data.newOrder?._id));
    history.push(`/shipping`);
  };

  return (
    <main className="mainCart">
      <section className="productShower">
        <h3>Your cart</h3>
        <ul className="cartCardsList">
          {cartList.map((item) => (
            <CartCard
              id={item._id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              key={item._id}
              img={item.img_url}
            />
          ))}
        </ul>
        {
          <button
            className="clearCart"
            onClick={() => {
              dispatch(removeAll());
              history.push("/products");
            }}
          >
            Remove All
          </button>
        }
      </section>
      <section className="cartOrder">
        <h4>{amountOfItems} items </h4>
        <h4>Total: ${getTotal()}</h4>
        {user && isAuthenticated ? (
          <button className="checkoutButton" onClick={handleCheckout}>
            Checkout
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
