import { useForm } from "../../../hooks/useForm";
import { AiOutlineCloseCircle } from 'react-icons/ai';
import './categoryModal.css';
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { useState } from "react";
import { createCategory } from "../../../helpers/createCategory";
import { fetchCategories } from "../../../redux/thunks/productThunk";


const formValidations = (form, type, categories) => {
	
	const validate = categories.filter((element) => element.name.toLowerCase() === form.toLowerCase());
	const errors = {};
	if (type === "name" && validate.length) {
		errors.name = 'The name of the category already exists'
	}
	return errors

};

const initialForm = {
	name: '',
};


export const CategoryModal = ({ onClose }) => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.product.categories);
	// const { formStorage, errors, handleChange, handleSubmitCategory, handleNameBlur } = useForm(initialForm, formValidations, categories);

	const [newCategoryForm, setNewCategoryForm] = useState({name: ""});
  const [errors, setErrors] = useState([]);


	const handlerNewCategoryForm = (e) =>{
		setNewCategoryForm({name: e.target.value});
	};

	const handleSubmitCategory = (e) => {
    e.preventDefault();
    createCategory(newCategoryForm);
    setNewCategoryForm({name: ""});
    dispatch(fetchCategories());
  };

	// const handleNameBlur = () => {
  //   setErrors(formValidations(newCategoryForm, "name", categories));
  // };

	return (
		<section className="categoryModal">
			<form onSubmit={handleSubmitCategory} className="formContainer" >
				<AiOutlineCloseCircle onClick={() => onClose(false)} className="closeIconC" />
				<section className="formInput">
					<label htmlFor="name" className="nameLabel">Category name:</label>
					<input type="text" id="name" name="name" value={newCategoryForm.name} onChange={handlerNewCategoryForm}
					//  onBlur={handleNameBlur} 
					 className="input" />
				</section>
				{errors.name
				?<p className="errors">{errors.name}</p>:
				newCategoryForm?
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

	);
};