import { useForm } from "../../../hooks/useForm"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './productsModal.css'

const initialForm = {
    name: '',
    resume:'',
    healthScore: '',

}

export const ProductModal = ({onClose}) => {
   const {form, handleChange, handleSubmitProduct} = useForm(initialForm)

   return(
    <section className="productModal">
        <form onSubmit={handleSubmitProduct} className="formContainerP">
            <AiOutlineCloseCircle onClick={()=> onClose(false)} className="closeIconP"/>
            <section className="formInputP">
            <label htmlFor="name" className="labelP">Name your product</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="inputP" />
            </section>
            <section className="formInputP">
            <label htmlFor="score" className="labelP">Rate your product</label>
            <input type="number" id="score" name="healthScore" value={form.healthScore} onChange={handleChange} className="inputP"/>
            </section>
            <section className="formInputP">
            <label htmlFor="image" className="labelP">Add a photo</label>
            <input id="image" type="text" className="inputP"/>
            </section>
            <section className="formInputP">
            <label htmlFor="resume" className="labelP">Describe your product</label>
            <textarea id="resume" name="resume" onChange={handleChange} value={form.resume}></textarea>
            </section>
            
            {/* {aca va cloudinary} */}
            <button type="submit" className="productButton">Crear</button>
            
        </form>
    </section>
   )
}