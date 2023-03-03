import { useForm } from "../../../hooks/useForm";
import { useHistory } from "react-router-dom";
import './shipping.css'
import { setShipping } from "../../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
const initialForm = {
  fullname: "",
  country: "",
  city: "",
  address: "",
  postal: "",
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
  if (!form.postal?.trim()) {
    errors.postal = "Postal Code is required";
  } 

  return errors;
};

export default function Shipping() {
  const { form, handleChange, errors, handleBlur } = useForm(initialForm, validationsForm);
  const buyer = useSelector((state) => state.user.userLocal);
  useEffect(()=>{
    if(!buyer._id) history.push('/shoppingCart')
  }, [])
  const history = useHistory();
  const dispatch = useDispatch()
  const handleShipmentSubmit = (e) => {
    e.preventDefault();
    dispatch(setShipping(form))
    history.push("/orderPlacement");
  };
  return (
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
            name="postal"
            id="postal"
            value={form.postal}
            onChange={handleChange}
          />
          
        </section>
        {errors.postal && <p className="errorShippingMessage">{errors.postal}</p>}
        <button disabled={form.fullname.length === 0 || Object.keys(errors).length >0} onClick={handleShipmentSubmit} className="shippingButton" type="submit">Continue</button>
      </form>
    </div>
  );
}
