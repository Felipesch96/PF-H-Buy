import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";
import axios from "axios";
import { setShipping } from "../../../redux/slices/cartSlice";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { fetchUserById } from "../../../redux/thunks/userThunk";
import { useEffect } from "react";
import { addNewAddress, setUserById } from "../../../redux/slices/usersSlice";

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

export const AddAddress = () => {
    const { form, handleShipmentChange, errors, handleBlur } = useForm(initialForm, validationsForm);
    const buyer = useSelector((state) => state.user.userLocal);
    const orderId = useSelector((state) => state.cart.orderId);
    const dispatch = useDispatch()
    const history = useHistory()
    const handleShipmentSubmit = async(e) => {
        e.preventDefault()
        
        dispatch(setShipping(form))
        
    try {
        const {data} =   await axios.put(`${REACT_APP_API_URL}/users/${buyer._id}`,{
            userAddress: form
          })
          await axios.put(`${REACT_APP_API_URL}/orders/${orderId}`,{
            shippingAddress: form
          })

          dispatch(addNewAddress(data))
    } catch (error) {
        console.log(error)
    }
  
    history.push("/orderPlacement");

    }
    return(
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
              value={form?.fullname}
              onChange={handleShipmentChange}
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
              value={form?.country}
              onChange={ handleShipmentChange}
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
              value={form?.city}
              onChange={ handleShipmentChange}
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
              value={form?.address}
              onChange={ handleShipmentChange}
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
              value={form?.postalCode}
              onChange={ handleShipmentChange}
            />
            
          </section>
          {errors.postalCode && <p className="errorShippingMessage">{errors.postalCode}</p>}
          <button disabled={form?.fullname.length === 0 || Object.keys(errors).length >0} onClick={handleShipmentSubmit} className="shippingButton" type="submit">Continue</button>
        </form>
        </div>
    )
}