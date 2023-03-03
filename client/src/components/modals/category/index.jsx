import { useForm } from "../../../hooks/useForm"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './categoryModal.css'
import { useSelector } from "react-redux"
import Swal from "sweetalert2"


const formValidations = (form, type, categories) => {
	
	const validate = categories.filter((element) => element.name.toLowerCase() === form.toLowerCase())
	const errors = {}
	if (type === "name" && validate.length) {
		errors.name = 'The name of the category already exists'
	}
	return errors

}

const initialForm = {
	name: '',
}

export const CategoryModal = ({ onClose }) => {
	const categories = useSelector((state) => state.product.categories)
	const { formStorage, errors, handleChange, handleSubmitCategory, handleNameBlur } = useForm(initialForm, formValidations, categories)
	return (
		<section className="categoryModal">
			<form onSubmit={handleSubmitCategory} className="formContainer" >
				<AiOutlineCloseCircle onClick={() => onClose(false)} className="closeIconC" />
				<section className="formInput">
					<label htmlFor="name" className="nameLabel">Name of the category</label>
					<input type="text" id="name" name="name" value={formStorage.name} onChange={handleChange} onBlur={handleNameBlur} className="input" />
				</section>
				{errors.name
				?<p className="errors">{errors.name}</p>:
				formStorage.name?
				<button type="submit" className="categoryButton" onClick={()=>{
					Swal.fire({
						color:"white",
						background:"#1299",
						icon: "success",
						title: "Categoría creada.",
						showConfirmButton: false,
						timer: 1500,
					  });
				}}>Crear</button>
				:<p className="errors">Please fill the blank</p>}
			</form>
		</section>

	)
}