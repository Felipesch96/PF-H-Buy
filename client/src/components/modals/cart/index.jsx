import { useSelector } from 'react-redux'
import CartCard from "../../CartCard/CartCard";
import {  useHistory } from "react-router-dom";
import './cartModal.css'
import { ModalCartCard } from '../../modalCartCard';

export const CartModal = () => {
   const {cartList, amountOfItems} = useSelector(state => state.cart)
   const history = useHistory()
   console.log(cartList)
    return(
        amountOfItems > 0 ? 
        <div className='cartModal'>
            <div className="cartModalCardsList">
                {cartList.map((item) => (
                    <ModalCartCard name={item.name} quantity={item.quantity} id={item._id} />
          ))}
            </div>
        <button className='goCart' onClick={()=> history.push('/shoppingCart') }>Go to cart</button>
        </div> : <div className='cartModal'><p>You don't have items in your cart :/</p></div>
    )
}