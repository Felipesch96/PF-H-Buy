import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory } from "../helpers/createCategory";
import { fetchCategories, fetchNewProducts } from "../redux/thunks/productThunk";

export const useForm = (initialForm = {}, formValidations, categories) => {
  const dispatch = useDispatch();
  const { userLocal } = useSelector((state) => state.user)

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
    setForm({ name: "" });
    alert ("Categoria creada con éxito")
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
      seller_id: userLocal._id
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
    alert("Producto creado con éxito")
  };

  const handleNameBlur = () => {
    setErrors(formValidations(form.name, "name", categories));
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
