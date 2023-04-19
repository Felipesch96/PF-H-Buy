import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useForm } from "../../../hooks/useForm";
import PreviewCard from "../../Card/PreviewCard";
import "./productsModal.css";

const formValidations = (formStorage, type) => {
  const reg = new RegExp("^[0-9]*$");
  const errors = {};

  if (type === "name" && !formStorage.trim()) {
    errors.name = "The name of the product is required";
  }
  if (type === "description" && !formStorage?.length > 0) {
    errors.description = "You must provide a short description of your product";
  }
  if (type === "price" && (formStorage < 1 || !reg.test(formStorage))) {
    errors.price = "Price must be a number higher than 0";
  }
  if (type === "stock" && (formStorage < 1 || !reg.test(formStorage))) {
    errors.stock = "You must provide at least 1 product";
  }
  if (
    type === "condition" &&
    (!formStorage || formStorage === "Select an option")
  ) {
    errors.condition = "Please select a condition";
  }
  if (
    type === "category" &&
    (!formStorage || formStorage === "Select an option")
  ) {
    errors.category = "Please select a category";
  }
  if (type === "photo" && !formStorage) {
    errors.photo = "Please upload a photo";
  }
  if (type === "brand" && !formStorage?.length > 0) {
    errors.brand = "You must provide the brand of your product";
  }
  if (type === "model" && !formStorage?.length > 0) {
    errors.model = "You must provide the model of your product";
  }
  return errors;
};

const initialForm = {
  name: "",
  img: "",
  brand: "",
  model: "",
  price: "",
  description: "",
  category: "",
  stock: "",
  condition: "",
};

const CreateProductFrom = ({ onClose }) => {
  const {
    formStorage,
    errors,
    handleNameBlur,
    handleChange,
    handleSubmitProduct,
    handlePriceBlur,
    handleDescBlur,
    handlePhotoBlur,
    handleStockcBlur,
    handleCondBlur,
    handleCatBlur,
    handleBrandBlur,
    handleModelBlur,
  } = useForm(initialForm, formValidations);

  const categories = useSelector((state) => state.product.categories);
  const [imgPreview, setImgPreview] = useState();
  const [formPreview, setformPreview] = useState({});
  const activeCategories = categories.filter((c) => c.isActive === true);

  const handlerImgPreview = (e) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);

      fileReader.onloadend = () => {
        setImgPreview(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleChangeValue = (e) => {
    handleChange(e);
    setformPreview({
      ...formPreview,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="para-img">
      <form onSubmit={handleSubmitProduct} className="formContainerP">
        <AiOutlineCloseCircle
          onClick={() => onClose(false)}
          className="closeIconP"
        />
        <section className="formInputP">
          <label className="labelP">Name your product</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formStorage.name}
            onChange={handleChangeValue}
            className="inputP"
            onBlur={handleNameBlur}
          />
          {errors.name && <span className="errors">{errors.name}</span>}
        </section>

        <section className="formInputP" onChange={(e) => handlerImgPreview(e)}>
          <label className="labelP">Upload an image</label>
          <input
            name="img"
            id="img"
            type="file"
            className=""
            onChange={handleChangeValue}
            onBlur={handlePhotoBlur}
          />
          {errors.photo && <p className="errors">{errors.photo}</p>}
        </section>
        <section className="formInputP">
          <label className="labelP">Select a category</label>
          <select
            onChange={handleChangeValue}
            onBlur={handleCatBlur}
            name="category"
          >
            <option>Select an option</option>
            {Array.isArray(categories) ? (
              activeCategories.map((element) => {
                return <option key={element._id}>{element.name}</option>;
              })
            ) : (
              <option>None</option>
            )}
          </select>
          {errors.category && <p className="errors">{errors.category}</p>}
        </section>
        <section className="formInputP">
          <label className="labelP">Brand</label>
          <input
            name="brand"
            id="brand"
            type="text"
            className="inputP"
            value={formStorage.brand}
            onChange={handleChangeValue}
            onBlur={handleBrandBlur}
          />
          {errors.brand && <p className="errors">{errors.brand}</p>}
        </section>
        <section className="formInputP">
          <label className="labelP">Model</label>
          <input
            name="model"
            id="model"
            type="text"
            className="inputP"
            value={formStorage.model}
            onChange={handleChangeValue}
            onBlur={handleModelBlur}
          />
          {errors.model && <p className="errors">{errors.model}</p>}
        </section>
        <section className="formInputP">
          <label className="labelP">Add a Price</label>
          <input
            name="price"
            id="price"
            type="text"
            className="inputP"
            value={formStorage.price}
            onChange={handleChangeValue}
            onBlur={handlePriceBlur}
          />
          {errors.price && <p className="errors">{errors.price}</p>}
        </section>
        <section className="formInputP">
          <label className="labelP">Stock</label>
          <input
            name="stock"
            id="stock"
            type="text"
            className="inputP"
            value={formStorage.stock}
            onChange={handleChangeValue}
            onBlur={handleStockcBlur}
          />
          {errors.stock && <p className="errors">{errors.stock}</p>}
        </section>

        <section className="formInputP">
          <label className="labelP">Select a condition</label>
          <select
            onChange={handleChangeValue}
            onBlur={handleCondBlur}
            name="condition"
          >
            <option>Select an option</option>
            <option>new</option>
            <option>used</option>
          </select>
          {errors.condition && <p className="errors">{errors.condition}</p>}
        </section>

        <section className="formInputP">
          <label className="labelP">Describe your product</label>
          <textarea
            id="resume"
            name="description"
            onChange={handleChangeValue}
            value={formStorage.description}
            onBlur={handleDescBlur}
          ></textarea>
          {errors.description && <p className="errors">{errors.description}</p>}
        </section>

        {formStorage.name &&
        formStorage.description &&
        formStorage.category &&
        formStorage.condition &&
        formStorage.img &&
        formStorage.price &&
        formStorage.stock &&
        formStorage.category !== "Select an option" &&
        formStorage.condition !== "Select an option" ? (
          <button
            type="submit"
            className="productButton"
            onClick={() => {
              Swal.fire({
                color: "white",
                background: "#1299",
                icon: "success",
                title: "Producto creado.",
                showConfirmButton: false,
                timer: 1500,
              });
            }}
          >
            Create
          </button>
        ) : (
          <span className="errors">
            Please fill the blanks to create a product
          </span>
        )}
      </form>

      <PreviewCard
        img={imgPreview}
        name={formPreview.name}
        price={formPreview.price}
        category={formPreview.category}
        description={formPreview.description}
      />
    </div>
  );
};

export default CreateProductFrom;
