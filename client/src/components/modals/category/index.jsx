import { useForm } from "../../../hooks/useForm"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './categoryModal.css'
import { useSelector } from "react-redux"
import MyComponente from "../../alerts/Alert2"


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
	const { form, errors, handleChange, handleSubmitCategory, handleNameBlur } = useForm(initialForm, formValidations, categories)
	return (
		<section className="categoryModal">
			<form onSubmit={handleSubmitCategory} className="formContainer" >
				<AiOutlineCloseCircle onClick={() => onClose(false)} className="closeIcon" />
				<section className="formInput">
					<label htmlFor="name" className="nameLabel">Name of the category</label>
					<input type="text" id="name" name="name" value={form.name} onChange={handleChange} onBlur={handleNameBlur} className="input" />
				</section>
				{errors.name
				?<p className="errors">{errors.name}</p>:
				form.name?
				<MyComponente/>
				// <button type="submit" className="categoryButton">Crear</button>
				:<p className="errors">Please fill the blank</p>}
			</form>
		</section>

	)
}