import { useForm } from "../../../hooks/useForm"
import { AiOutlineCloseCircle } from 'react-icons/ai'
import './categoryModal.css'
import MyComponente from "../../alerts/Alert2"


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
					{errors.name && <p className="errors">{errors.name}</p>}
				</section>
				<MyComponente/>
			</form>
		</section>

	)
}