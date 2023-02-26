import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../../redux/slices/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import "./ShoppingCart.css";
import CartCard from "../../CartCard/CartCard";
import Login from "../../buttons/Login/Login";

export default function ShoppingCart() {
  const { amountOfItems, cartList } = useSelector((state) => state.cart);
  const { user, isAuthenticated } = useAuth0();
  const history = useHistory();
  const dispatch = useDispatch();
  const getTotal = () => {
    let totalPrice = 0;
    cartList.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
    return totalPrice;
  };
  const handleCheckout = () => {
    isAuthenticated ? history.push("/shipping") : history.push("/login");
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
