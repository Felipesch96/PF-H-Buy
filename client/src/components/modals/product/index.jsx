import { useForm } from "../../../hooks/useForm"
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
        <form onSubmit={handleSubmitProduct}>
        <button onClick={()=> onClose(false)}>X</button>
            <label htmlFor="name">Name your product</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} />
            <label htmlFor="resume">Describe your product</label>
            <textarea id="resume" name="resume" onChange={handleChange} value={form.resume}></textarea>
            <label htmlFor="score">Rate your product</label>
            <input type="number" id="score" name="healthScore" value={form.healthScore} onChange={handleChange}/>
            {/* {aca va cloudinary} */}
            <button type="submit">Crear</button>
            
        </form>
    </section>
   )
}