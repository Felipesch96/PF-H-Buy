import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { ModalCartCard } from "../../modalCartCard";
import "./cartModal.css";
import Swal from "sweetalert2";

export const CartModal = () => {
  const { cartList, amountOfItems } = useSelector((state) => state.cart);
  const history = useHistory();
  const alert=()=>{
    Swal.fire({
      icon: "error",
      width:390,
      height:70,
      color:"white",
      background:"#1299",
      title: "No tienes ningun producto en carrito.",
      showConfirmButton: false,
      timer: 1500,
    })
  }

  return amountOfItems > 0 ? (
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
  ) : alert()
};
