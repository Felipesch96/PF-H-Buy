import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import axios from "axios";

export default function CartCard({ name, id, quantity, price }) {
  const dispatch = useDispatch();
  const updateCart = async () => {
    const cant = {quantity : quantity}
    const { data } = await axios.put(`http://localhost:3001/cart/${id}`, cant);
    if (data === "Out of stock") return window.alert("No more product in stock");
    dispatch(incrementQuantity(id));
  };
  return (
    <main>
      <h1>{name}</h1>
      <h5> price: {price * quantity}</h5>
      <div>
        <button onClick={updateCart}>+</button>
        <p>{quantity}</p>
        <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
      </div>
      <button onClick={() => dispatch(removeFromCart({ id, quantity }))}>
        Remove item
      </button>
    </main>
  );
}
