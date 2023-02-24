import { useForm } from "../../../hooks/useForm"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './categoryModal.css'


const formValidations = (form) => {
	let errors = {}
	if (!form.name.trim()) {
		errors.name = 'The name of the category is required'
	}
	return errors

}

const initialForm = {
	name: '',
}

export const CategoryModal = ({ onClose }) => {
	const { form, errors, handleChange, handleSubmitCategory, handleBlur } = useForm(initialForm, formValidations)

	return (
		<section className="categoryModal">
			<form onSubmit={handleSubmitCategory} className="formContainer" >
				<AiOutlineCloseCircle onClick={() => onClose(false)} className="closeIcon" />
				<section className="formInput">
					<label htmlFor="name" className="nameLabel">Name of the category</label>
					<input type="text" id="name" name="name" value={form.name} onChange={handleChange} onBlur={handleBlur} className="input" />
					{errors.name && <span className="errors">{errors.name}</span>}
				</section>
				<button type="submit" className="categoryButton" disabled={errors.length > 0}>Crear</button>
			</form>
		</section>

	)
}