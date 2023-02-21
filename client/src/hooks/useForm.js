import { useState } from "react";
import { createProduct } from "../helpers/createProduct";
import { createCategory } from "../helpers/createCategory";
import { useDispatch } from "react-redux";
import { fetchCategories, fetchProducts } from "../redux/thunks/productThunk";

export const useForm = (initialForm = {}, formValidations) => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState([]);

  const handleChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    console.log(form)
    createCategory(form);
    dispatch(fetchCategories());
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    createProduct(form);
    dispatch(fetchProducts());
  };

  const handleBlur = () => {
    setErrors(formValidations(form));
  };

  return {
    form,
    errors,

    handleChange,
    handleSubmitCategory,
    handleSubmitProduct,
    handleBlur,
  };
};
