import { useForm } from "../../../hooks/useForm"
import { useHistory } from "react-router-dom"

const initialForm = {
    fullname: '',
    country: '',
    city: '',
    address: '',
    postal: ''
}
export const Shipping = () => {
     const {form, handleChange} = useForm(initialForm)
     const history = useHistory()
     const handleShipmentSubmit = (e) => {
        e.preventDefault()
        history.push('/payment')
     }
    return(
        <div>
            <form onSubmit={handleShipmentSubmit}>
                <section>
                    <label htmlFor="fullname">Fullname</label>
                    <input type="text" name="fullname" id="fullname" value={form.fullname} onChange={handleChange}/>
                </section>
                <section>
                    <label htmlFor="country">Country</label>
                    <input type="text" name="country" id="country" value={form.country} onChange={handleChange}/>
                </section>
                <section>
                    <label htmlFor="city">City</label>
                    <input type="text" name="city" id="city" value={form.city} onChange={handleChange}/>
                </section>
                <section>
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" id="address" value={form.address} onChange={handleChange}/>
                </section>
                <section>
                    <label htmlFor="postal">Postal code</label>
                    <input type="text" name="postal" id="postal" value={form.postal} onChange={handleChange}/>
                </section>
                <button type="submit">Continue</button>
            </form>

        </div>
    )
}