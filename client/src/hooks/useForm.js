import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../customHooks/UseLocalStore";
import { createCategory } from "../helpers/createCategory";
import {
  fetchCategories,
  fetchNewProducts,
} from "../redux/thunks/productThunk";

export const useForm = (initialForm = {}, formValidations, categories) => {
  const dispatch = useDispatch();
  const { userLocal } = useSelector((state) => state.user);

  const [errors, setErrors] = useState([]);
  const [formStorage, setformStorage] = useLocalStorage(
    "prodForm",
    initialForm
  );

  

  const handleChange = ({ target }) => {
    setformStorage({
      ...formStorage,
      [target.name]: target.value,
    });
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    createCategory(formStorage);
    dispatch(fetchCategories());
  };

  const handleSubmitProduct = (e) => {
    e.preventDefault();
    const { name, img, condition, price, description, category, stock } =
      formStorage;
    dispatch(
      fetchNewProducts({
        name,
        img,
        condition,
        price: Number(price),
        description,
        category,
        stock: Number(stock),
        seller_id: userLocal._id,
      })
    );
    setformStorage({
      name: "",
      img: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      condition: "",
    });
  };
  console.log(formStorage);
  const handleNameBlur = () => {
    setErrors(formValidations(formStorage.name, "name", categories));
  };
  const handlePriceBlur = () => {
    setErrors(formValidations(formStorage.price, "price"));
  };
  const handleDescBlur = () => {
    setErrors(formValidations(formStorage.description, "description"));
  };
  const handleStockcBlur = () => {
    setErrors(formValidations(formStorage.stock, "stock"));
  };
  const handleCondBlur = () => {
    setErrors(formValidations(formStorage.condition, "condition"));
  };
  const handleCatBlur = () => {
    setErrors(formValidations(formStorage.category, "category"));
  };
  const handlePhotoBlur = () => {
    setErrors(formValidations(formStorage.img, "photo"));
  };

  return {
    formStorage,
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
