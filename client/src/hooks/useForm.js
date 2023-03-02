import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../customHooks/UseLocalStore";
import { createCategory } from "../helpers/createCategory";
import {
  fetchCategories,
  fetchNewProducts,
} from "../redux/thunks/productThunk";
import axios from "axios";


export const useForm = (initialForm = {}, formValidations, categories) => {
  const dispatch = useDispatch();
  const { userLocal } = useSelector((state) => state.user);

  const [errors, setErrors] = useState([]);
  const [formStorage, setformStorage] = useLocalStorage(
    "prodForm",
    initialForm
  );

  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState("");
  const [public_id, setPublic_id] = useState("");
  const [cargada, setCargada] = useState(false);

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
      console.log(base64);
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
    dispatch(fetchCategories());
  };

  function uploadSingleImage(base64) {
    setLoading(true);
    axios
      .post("http://localhost:3001/products", { img: base64 })
      .then((res) => {
        setUrl(res.data.secure_url);
        setPublic_id(res.data.public_id);
        setCargada(true);
        alert("Image uploaded Succesfully");
      })
      .then(() => setLoading(false))
      .catch(console.log);
  };

  const handleSubmitProduct = async (e) => {
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
