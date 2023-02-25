import { useDispatch, useSelector } from "react-redux";
import { removeAll } from "../../../redux/slices/cartSlice";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";
import { CartCard } from "../../CartCard/CartCard";


export default function ShoppingCart() {
  const { amountOfItems, cartList } = useSelector((state) => state.cart);
  const {  isAuthenticated } = useAuth0();
  console.log("items", cartList);
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
    <main>
      <section>
        <h3>Your cart</h3>
        <h4>{amountOfItems} items </h4>
        <h4>Total:{getTotal()}</h4>
        <section>
          <button onClick={handleCheckout}>Proceed to checkout</button>
        </section>
      </section>
      <ul>
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

      <button onClick={() => dispatch(removeAll())}>Clear</button>
    </main>
  );
}
