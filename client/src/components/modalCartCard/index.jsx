import { useDispatch } from "react-redux";
import axios from "axios";
import { decrementQuantity, incrementQuantity, removeFromCart } from "../../redux/slices/cartSlice";
import { FaTrash, FaTrashAlt } from "react-icons/fa";
import './modalCards.css'
export const ModalCartCard = ({name, quantity, id}) => {
    const dispatch = useDispatch();
    const updateCart = async () => {
    const cant = { quantity: quantity };
    const { data } = await axios.put(`http://localhost:3001/cart/${id}`, cant);
    if (data === "Out of stock")
      return window.alert("No more product in stock");
    dispatch(incrementQuantity(id));
  };
    return(
        <div className="modalCards">
            <p className='itemN'>{name}</p>
            <button className="modalButtonsPlus" onClick={updateCart}>
            +
            </button>
            <p className="mQuan">{quantity}</p>
            {quantity > 1 
            ? <button
            className="modalButtonsMinus"
            onClick={() => dispatch(decrementQuantity(id))}
            >
            -
            </button>
            : <FaTrashAlt
            className="remover"
            onClick={() => dispatch(removeFromCart({ id, quantity }))}
          />}
          {quantity > 1? <FaTrashAlt
            className="remover"
            onClick={() => dispatch(removeFromCart({ id, quantity }))}
          /> : null}
            
        </div>
    )
}