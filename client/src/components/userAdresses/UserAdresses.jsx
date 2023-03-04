import { useState } from "react"

import './userAdresses.css'
export const UserAdresses = ({address, city, postalCode, fullname, country, setSelected}) => {
  const [clicked, setClicked] = useState(false)
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

     </div>
    
   
    )
}