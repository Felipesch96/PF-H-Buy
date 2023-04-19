import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ModalCartCard } from "../../modalCartCard";
import "./cartModal.css";

export const CartModal = () => {
  const { cartList } = useSelector((state) => state.cart);
  const history = useHistory();
  return (
    <div className="cartModal">
      <div className="cartModalCardsList">
        {cartList.map((item) => (
          <ModalCartCard
            key={item._id}
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
  );
};
