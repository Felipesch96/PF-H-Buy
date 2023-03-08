import { useDispatch } from "react-redux";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import "./CartCard.css";
import Swal from "sweetalert2";
const { REACT_APP_API_URL } = process.env;

const stockAlert=()=>{
  Swal.fire({
    position: "top-center",
    icon: "error",
    title: "Out of stock",
    showConfirmButton: false,
    timer: 1500,
  })
}

export default function CartCard({ name, id, quantity, price, img }) {
  const dispatch = useDispatch();
  const updateCart = async () => {
    const cant = { quantity: quantity };
    const { data } = await axios.put(`${REACT_APP_API_URL}/cart/${id}`, cant);
    if (data === "Out of stock")
      return stockAlert();
    dispatch(incrementQuantity(id));
  };
  return (
    <main className="cartCards">
      <img className="productPicture" src={img} alt={name}/>
      <div className="manageCartProduct">
      <h1 className="productName">{name}</h1>
      <div className="quantityModifier">
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
        {quantity > 1 ? (
        <FaTrashAlt
          className="remover"
          onClick={() => dispatch(removeFromCart({ id, quantity }))}
        />
      ) : null}
      </div>
      
      </div>
      <p className="price">${price * quantity}</p>
     
      
    </main>
  );
}
  