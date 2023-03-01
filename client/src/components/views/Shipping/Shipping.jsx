import { useForm } from "../../../hooks/useForm";
import { useHistory } from "react-router-dom";
import './shipping.css'
import { setShipping } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
const initialForm = {
  fullname: "",
  country: "",
  city: "",
  address: "",
  postal: "",
};
export default function Shipping() {
  const { form, handleChange } = useForm(initialForm);
  const history = useHistory();
  const dispatch = useDispatch()
  const handleShipmentSubmit = (e) => {
    e.preventDefault();
    dispatch(setShipping(form))
    history.push("/orderPlacement");
  };
  return (
    <div className="shippingFormContainer">
      <h1>Your address</h1>
      <form className="shippingForm" onSubmit={handleShipmentSubmit}>
        <section className="shippingSection">
          <label htmlFor="fullname">Fullname</label>
          <input
          className="shippingInput"
            type="text"
            name="fullname"
            id="fullname"
            value={form.fullname}
            onChange={handleChange}
          />
        </section>
        <section className="shippingSection">
          <label htmlFor="country">Country</label>
          <input
          className="shippingInput"
            type="text"
            name="country"
            id="country"
            value={form.country}
            onChange={handleChange}
          />
        </section>
        <section className="shippingSection">
          <label htmlFor="city">City</label>
          <input
          className="shippingInput"
            type="text"
            name="city"
            id="city"
            value={form.city}
            onChange={handleChange}
          />
        </section>
        <section className="shippingSection">
          <label htmlFor="address">Address</label>
          <input
          className="shippingInput"
            type="text"
            name="address"
            id="address"
            value={form.address}
            onChange={handleChange}
          />
        </section>
        <section className="shippingSection">
          <label htmlFor="postal">Postal code</label>
          <input
          className="shippingInput"
            type="text"
            name="postal"
            id="postal"
            value={form.postal}
            onChange={handleChange}
          />
        </section>
        <button className="shippingButton" type="submit">Continue</button>
      </form>
    </div>
  );
}
