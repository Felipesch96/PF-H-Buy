import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../../redux/slices/cartSlice";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import "./CartCard.css";
const { REACT_APP_API_URL } = process.env;

export default function CartCard({ name, id, quantity, price, img }) {
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
      <h1 className="productName">{name}</h1>
      <img className="productPicture" src={img} alt={name}/>
      <h5> Price: {price * quantity}</h5>
      <div className="manageCartProduct">
        <button className="quantityModderPlus" onClick={updateCart}>
          +
        </button>
        <p className="quan">{quantity}</p>
        {quantity > 1 ? (
          <button
            className="quantityModderDel"
            onClick={() => dispatch(decrementQuantity(id))}
          >
            -
          </button>
        ) : (
          <FaTrashAlt
            className="remover"
            onClick={() => dispatch(removeFromCart({ id, quantity }))}
          />
        )}
      </div>
      {quantity > 1 ? (
        <FaTrashAlt
          className="remover"
          onClick={() => dispatch(removeFromCart({ id, quantity }))}
        />
      ) : null}
    </main>
  );
}
  