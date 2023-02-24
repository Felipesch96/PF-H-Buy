import { useForm } from "../../../hooks/useForm";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "./productsModal.css";
import CreateProductFrom from "./CreateProductForm";

const formValidations = (form) => {
  let errors = {};
  if (!form.name.trim()) {
    errors.name = "The name of the product is required";
  }
  if (!form.description.length > 0) {
    errors.description = "You must provide a description of your product";
  }
  /* if (!form.healthScore) {
    errors.healthScore = "Rating is required";
  } else if (!/^[1-5]$/.test(form.rating)) {
    errors.healthScore = "only ratings between 1 and 5 are valid";
  }
  if (!form.brand.trim()) {
    errors.brand = "The brand of the product is required";
  }
  if (form.stock < 1) {
    errors.stock = "You must provide at least one product";
  } */

  return errors;
};

const initialForm = {
  name: "",
  img: "",
  description: "",
  price: 0,
};

export const ProductModal = ({ onClose }) => {
  const { form, errors, handleBlur, handleChange, handleSubmitProduct } =
    useForm(initialForm, formValidations);

  return (
    <section className="productModal-seller">
      <CreateProductFrom onClose={onClose}/>
    </section>
  );
};
