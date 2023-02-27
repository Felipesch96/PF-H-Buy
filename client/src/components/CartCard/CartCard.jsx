import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import axios from "axios";
import { FaTrash } from "react-icons/fa";
import "./CartCard.css";
const {REACT_APP_API_URL} = process.env

export default function CartCard({ name, id, quantity, price }) {
  const dispatch = useDispatch();
  const updateCart = async () => {
    const cant = { quantity: quantity };
    const { data } = await axios.put(`${REACT_APP_API_URL}/cart/${id}`, cant);
    if (data === "Out of stock")
      return window.alert("No more product in stock");
    dispatch(incrementQuantity(id));
  };
  return (
    <main className="cartCards">
      <h1>{name}</h1>
      <h5> Price: {price * quantity}</h5>
      <div className="manageCartProduct">
        <button className="quantityModderPlus" onClick={updateCart}>
          +
        </button>
        <p className="quan">{quantity}</p>
        <button
          className="quantityModderDel"
          onClick={() => dispatch(decrementQuantity(id))}
        >
          -
        </button>
      </div>
      <FaTrash
        className="remover"
        onClick={() => dispatch(removeFromCart({ id, quantity }))}
      />
    </main>
  );
}
