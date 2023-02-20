import { useForm } from "../../../hooks/useForm"
import {AiOutlineCloseCircle} from 'react-icons/ai'
import './productsModal.css'

const formValidations = (form) => {
    let errors = {}
    if(!form.name.trim()){
        errors.name ='The name of the product is required'
    } 
    if(!form.resume.length > 0){
        errors.resume = 'You must provide a description of your product'
    }
    if(!form.healthScore){
        errors.healthScore = 'Rating is required'
    } else if(!/^[1-5]$/.test(form.rating)){
        errors.healthScore = 'only ratings between 1 and 5 are valid'
    }
    if(!form.brand.trim()){
        errors.brand ='The brand of the product is required'
    } 
    if(form.stock < 1){
        errors.stock = 'You must provide at least one product'
    }
    
    return errors

}

const initialForm = {
    name: '',
    resume:'',
    healthScore: '',
    brand: '',
    stock: 0

}

export const ProductModal = ({onClose}) => {
   const {form, errors, handleBlur, handleChange, handleSubmitProduct} = useForm(initialForm, formValidations)

   return(
    <section className="productModal">
        <form onSubmit={handleSubmitProduct} className="formContainerP">
            <AiOutlineCloseCircle onClick={()=> onClose(false)} className="closeIconP"/>
            <section className="formInputP">
            <label htmlFor="name" className="labelP">Name your product</label>
            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} className="inputP" onBlur={handleBlur} />
            {errors.name && <p className="errors">{errors.name}</p>}
            </section>
            <section className="formInputP">
            <label htmlFor="score" className="labelP">Rate your product</label>
            <input type="number" id="score" name="healthScore" value={form.healthScore} onChange={handleChange} className="inputP" onBlur={handleBlur}/>
            {errors.healthScore && <p className="errors">{errors.healthScore}</p>}
            </section>
            <section className="formInputP">
            <label htmlFor="image" className="labelP">Add a photo</label>
            <input id="image" type="text" className="inputP"/>
            {/* {errors.name && <p>{errors.name}</p>} */}
            </section>
            <section className="formInputP">
            <label htmlFor="brand" className="labelP">Brand</label>
            <input id="brand" type="text" className="inputP" value={form.brand} onChange={handleChange} onBlur={handleBlur}/>
            {errors.brand && <p className="errors">{errors.brand}</p>}
            </section>
            <section className="formInputP">
            <label htmlFor="stock" className="labelP">Stock</label>
            <input id="stock" type="number" className="inputP" value={form.stock} onChange={handleChange} onBlur={handleBlur}/>
            {errors.stock && <p className="errors">{errors.stock}</p>}
            </section>
            <section className="formInputP">
            <label htmlFor="resume" className="labelP">Describe your product</label>
            <textarea id="resume" name="resume" onChange={handleChange} value={form.resume} onBlur={handleBlur}></textarea>
            {errors.resume && <p className="errors">{errors.resume}</p>}
            </section>
            
            {/* {aca va cloudinary} */}
            <button type="submit" className="productButton">Crear</button>
            
        </form>
    </section>
   )
}