import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ModalCartCard } from "../../modalCartCard";
import "./cartModal.css";

export const CartModal = () => {
  const { cartList, amountOfItems } = useSelector((state) => state.cart);
  const history = useHistory();

  return amountOfItems >  0 ? (
    <div className="cartModal">
      <div className="cartModalCardsList">
        {cartList.map((item) => (
          <ModalCartCard
            name={item.name}
            quantity={item.quantity}
            id={item._id}
          />
        ))}
      </div>
      <button className="goCart" onClick={() => history.push("/shoppingCart")}>
        Go to cart
      </button>
    </div>
  ) : (
    <div className="cartModal">
      <p>Your cart is empty</p>
    </div>
  );
};
