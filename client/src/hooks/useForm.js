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

  const [form, setForm] = useState(initialForm);
  

  const handleShipmentChange = ({ target }) => {
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  
 const handleBlur = (e) => {
      handleChange(e);
      setErrors(formValidations(form));
 }
  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onloadend = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChange = async ({ target }) => {
    if (target.name === "img") {
      const files = target.files;
      const base64 = await convertBase64(files[0]);
      setformStorage({
        ...formStorage,
        img: base64
      });
    } else {
      setformStorage({
        ...formStorage,
        [target.name]: target.value,
      });
    }
  };

  const handleSubmitCategory = (e) => {
    e.preventDefault();
    createCategory(formStorage);
    setformStorage("");
    dispatch(fetchCategories());
  };

  const handleSubmitProduct = async (e) => {
    e.preventDefault();
    const { name, img, brand, model, condition, price, description, category, stock } =
      formStorage;
    dispatch(
      fetchNewProducts({
        name,
        img,
        brand,
        model,
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
      brand: "",
      model: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      condition: "",
      
    });
    e.target.reset();
  };
  const handleNameBlur = () => {
    setErrors(formValidations(formStorage.name, "name", categories));
  };
  const handleBrandBlur = () => {
    setErrors(formValidations(formStorage.brand, "brand"));
  };
  const handleModelBlur = () => {
    setErrors(formValidations(formStorage.model, "model"));
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
    form,
    handleShipmentChange,
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
    handleBrandBlur,
    handleModelBlur,
    handleBlur
  };
};
