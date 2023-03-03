import { useForm } from "../../../hooks/useForm";
import { useHistory } from "react-router-dom";
import './shipping.css'
import { setShipping } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
// import { AddAddress } from "../addAddress/AddAddress";

const {REACT_APP_API_URL} = process.env
const initialForm = {
  fullname: "",
  country: "",
  city: "",
  address: "",
  postalCode: "",
};

const validationsForm = (form) => {
  let errors = {};
  if (!form.fullname?.trim()) {
    errors.fullname = "Name is required";
  } 

  if (!form.country?.trim()) {
    errors.country = "Country is required";
  } 

  if (!form.city?.trim()) {
    errors.city = "City is required";
  }

  if (!form.address?.trim()) {
    errors.address = "Address is required";
  } 
  if (!form.postalCode?.trim()) {
    errors.postalCode = "Postal Code is required";
  } 

  return errors;
};

export default function Shipping() {
  const { form, handleChange, errors, handleBlur } = useForm(initialForm, validationsForm);
  const buyer = useSelector((state) => state.user.userLocal);
  const orderId = useSelector((state) => state.cart.orderId);
  const [clicked, setClicked] = useState(false)
  const [selected, setSelected] = useState({
    address: '',
    city: '',
    postalCode: '',
    country: '',
    fullname: ''
  })
  useEffect(()=>{
    if(!buyer._id) history.push('/shoppingCart')
  }, [])
  
  const history = useHistory();
  const dispatch = useDispatch()
  const handleShipmentSubmit = async(e) => {
    e.preventDefault();
    if(buyer.addresses?.length > 0){
      dispatch(setShipping(selected))
      await axios.put(`${REACT_APP_API_URL}/orders/${orderId}`,{
        shippingAddress: selected
      })
      history.push("/orderPlacement");
      return
    }
    dispatch(setShipping(form))
    await axios.put(`${REACT_APP_API_URL}/users/${buyer._id}`,{
      userAddress: form
    })
    await axios.put(`${REACT_APP_API_URL}/orders/${orderId}`,{
      shippingAddress: form
    })
    history.push("/orderPlacement");
  };
  return (
    buyer.userAddress?.length > 0 ? buyer.userAddress.map(adr => (
      <div>
         <div key={adr.address} className={clicked ? 'selectedInfo' : 'notSelectedInfo'} onClick={()=> {
          setSelected({...selected, 
          address: adr.address,
          city: adr.city,
          postalCode: adr.postalCode,
          country: adr.country,
          fullname: adr.fullname
        })
        setClicked(!clicked)
      }}>
        <p>{adr.fullname}</p>
        <p>{adr.address}</p>
        <p>{adr.city}</p>
        <p>{adr.postalCode}</p>

      </div>
      <button onClick={handleShipmentSubmit} className="shippingButton">Continue</button>
      <button onClick={()=> history.push('/addAddress')}>New address</button>
      </div>
     
    )): 
    <div className="shippingFormContainer">
      
      <form className="shippingForm" onSubmit={handleShipmentSubmit}>
      <h1 className="shippingTitle">Your address</h1>
        <section className="shippingSection">
        
          <label className="shippingLabel" htmlFor="fullname">Fullname</label>
          <input
          onBlur={handleBlur}
          className="shippingInput"
            type="text"
            name="fullname"
            id="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
          
        </section>
        {errors.fullname && <p className="errorShippingMessage">{errors.fullname}</p>}
        <section className="shippingSection">
          <label className="shippingLabel" htmlFor="country">Country</label>
          <input
          onBlur={handleBlur}
          className="shippingInput"
            type="text"
            name="country"
            id="country"
            value={form.country}
            onChange={handleChange}
          />
          
        </section>
        {errors.country && <p className="errorShippingMessage">{errors.country}</p>}
        <section className="shippingSection">
          <label className="shippingLabel" htmlFor="city">City</label>
          <input
          onBlur={handleBlur}
          className="shippingInput"
            type="text"
            name="city"
            id="city"
            value={form.city}
            onChange={handleChange}
          />
          
        </section>
        {errors.city && <p className="errorShippingMessage">{errors.city}</p>}
        <section className="shippingSection">
          <label className="shippingLabel" htmlFor="address">Address</label>
          <input
          onBlur={handleBlur}
          className="shippingInput"
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
          />
          
        </section>
        {errors.address && <p className="errorShippingMessage">{errors.address}</p>}
        <section className="shippingSection">
          <label className="shippingLabel" htmlFor="postal">Postal code</label>
          <input
          onBlur={handleBlur}
          className="shippingInput"
            type="text"
            name="postalCode"
            id="postal"
            value={form.postalCode}
            onChange={handleChange}
          />
          
        </section>
        {errors.postalCode && <p className="errorShippingMessage">{errors.postalCode}</p>}
        <button disabled={form.fullname.length === 0 || Object.keys(errors).length >0} onClick={handleShipmentSubmit} className="shippingButton" type="submit">Continue</button>
      </form>
    </div>
  );
}


