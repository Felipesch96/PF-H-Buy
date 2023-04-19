
import { useHistory } from "react-router-dom";
import './shipping.css'
import { setShipping } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { UserAdresses } from "../../userAdresses/UserAdresses";
import { AddAddress } from "../addAddress/AddAddress";
import { fetchUserById } from "../../../redux/thunks/userThunk";

const {REACT_APP_API_URL} = process.env

export default function Shipping() {
  const buyer = useSelector((state) => state.user.userLocal);
  const orderId = useSelector((state) => state.cart.orderId);
  const [selected, setSelected] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    fullname: ''
  })

  
  const history = useHistory();
  useEffect(()=>{
    if(!buyer._id) history.push('/shoppingCart')
  }, [buyer._id])
  
 
  const dispatch = useDispatch()
  const handleShipmentSubmit = async(e) => {
    e.preventDefault();
    dispatch(setShipping(selected))
    await axios.put(`${REACT_APP_API_URL}/orders/${orderId}`,{
        shippingAddress: selected
      })
    history.push("/orderPlacement");
    
  };

  return (
    buyer.userAddress?.length > 0 ? 
    <div className="allShippingInfo">
       <div className="allAddresses">
     { buyer.userAddress?.map(adr => <UserAdresses 
      setSelected={setSelected}
      address={adr?.address} 
      city={adr?.city}
      country={adr?.country} 
      postalCode={adr?.postalCode}
      fullname={adr?.fullname}
      id={adr?._id}/>)}

    </div>
    <div className="shippingButtons">   
     <button onClick={handleShipmentSubmit} className="shippingButton" disabled={!selected.address}>Continue</button>
     <button className="newAddress" disabled={buyer.userAddress.length === 5} onClick={ ()=> history.push('/addAddress')}>New address</button></div>
    </div>
     :
      <AddAddress/>
  );
}


