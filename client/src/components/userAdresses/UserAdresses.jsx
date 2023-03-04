import axios from "axios"
import { useState } from "react"
import { useSelector } from "react-redux"
import './userAdresses.css'
const {REACT_APP_API_URL} = process.env
export const UserAdresses = ({address, city, postalCode, fullname, country, setSelected, id}) => {
  const { _id} = useSelector(state => state.user.userLocal)
  const [clicked, setClicked] = useState(false)
  
  const deleteAddress = async(id) => {
    await axios.delete(`${REACT_APP_API_URL}/adresss?id=${_id}&addressId=${id}`)
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
       <button onClick={()=> deleteAddress(id)}>X</button>

     </div>
    
   
    )
}