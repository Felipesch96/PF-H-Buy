import { useState } from "react";
import { useDispatch } from "react-redux";
import { createCategory } from "../helpers/createCategory";
import { fetchCategories, fetchNewProducts } from "../redux/thunks/productThunk";

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
    createCategory(form);
    dispatch(fetchCategories());
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const { name, img, condition, price, description, category, stock } = form;
    dispatch(fetchNewProducts({
      name,
      img,
      condition,
      price: Number(price),
      description,
      category,
      stock: Number(stock),
    }))
    setForm({
        name: "",
        img: "",
        price: "",
        description: "",
        category: "",
        stock: "",
        condition: ""
    })
  };

  const handleNameBlur = () => {
    setErrors(formValidations(form.name, "name"));
  };
  const handlePriceBlur = () => {
    setErrors(formValidations(form.price, "price"));
  };
  const handleDescBlur = () => {
    setErrors(formValidations(form.description, "description"));
  };
  const handleStockcBlur = () => {
    setErrors(formValidations(form.stock, "stock"));
  };
  const handleCondBlur = () => {
    setErrors(formValidations(form.condition, "condition"));
  };
  const handleCatBlur = () => {
    setErrors(formValidations(form.category, "category"));
  };
  const handlePhotoBlur = () => {
    setErrors(formValidations(form.img, "photo"));
  };


  return {
    form,
    errors,
    handleStockcBlur,
    handleCondBlur,
    handlePhotoBlur,
    handleCatBlur,
    handlePriceBlur,
    handleDescBlur,
    handleChange,
    handleSubmitCategory,
    handleSubmitProduct,
    handleNameBlur,
  };
};
