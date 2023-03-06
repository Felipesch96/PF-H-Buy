import axios from "axios";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../../redux/slices/usersSlice";
import './userAdresses.css';
const {REACT_APP_API_URL} = process.env
export const UserAdresses = ({address, city, postalCode, fullname, country, setSelected, id}) => {
  const { _id} = useSelector(state => state.user.userLocal)
  console.log('id del usuario',_id)
  const [clicked, setClicked] = useState(false)
  const dispatch = useDispatch()
  console.log('id de la direccion',id)
  const deleteAddress = async(id) => {
    await axios.put(`${REACT_APP_API_URL}/users?id=${_id}&addressId=${id}`)
    dispatch(removeAddress(id))
  }
    return(
        <div key={address} className={clicked ? 'selectedInfo' : 'notSelectedInfo'} onClick={()=> {
         setSelected({
         address: address,
         city: city,
         postalCode: postalCode,
         country: country,
         fullname: fullname
       })
       setClicked(!clicked)
     }}>
       <p className="shippingCardInfo">Fullname: {fullname}</p>
       <p className="shippingCardInfo">Address: {address}</p>
       <p className="shippingCardInfo">City: {city}</p>
       <p className="shippingCardInfo">Postal Code: {postalCode}</p>
       <FaTrashAlt
            className="remover"
            onClick={() => deleteAddress(id)}
          />

     </div>
    
   
    )
}