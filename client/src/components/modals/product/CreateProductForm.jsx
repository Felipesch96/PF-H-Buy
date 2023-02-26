import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "../../../hooks/useForm";
import MyComponent from "../../alerts/Alert";


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

const CreateProductFrom = ({ onClose }) => {

  const { form, errors, handleBlur, handleChange, handleSubmitProduct } =
  useForm(initialForm, formValidations);

  return(
    <form onSubmit={handleSubmitProduct} className="formContainerP">
        <AiOutlineCloseCircle
          onClick={() => onClose(false)}
          className="closeIconP"
        />
        <section className="formInputP">
          <label htmlFor="name" className="labelP">
            Name your product
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="inputP"
            onBlur={handleBlur}
          />
          {errors.name && <p className="errors">{errors.name}</p>}
        </section>

        <section className="formInputP">
          <label htmlFor="image" className="labelP">
            Add a photo
          </label>
          <input
            name="image"
            id="image"
            type="text"
            className="inputP"
            onChange={handleChange}
          />
          {/* {errors.name && <p>{errors.name}</p>} */}
        </section>
        <section className="formInputP">
          <label htmlFor="price" className="labelP">
            Add a Price
          </label>
          <input
            name="price"
            id="price"
            type="number"
            className="inputP"
            onChange={handleChange}
          />
          {/* {errors.name && <p>{errors.name}</p>} */}
        </section>

        <section className="formInputP">
          <label htmlFor="resume" className="labelP">
            Describe your product
          </label>
          <textarea
            id="resume"
            name="description"
            onChange={handleChange}
            value={form.description}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && <p className="errors">{errors.description}</p>}
        </section>
        {/* <section className="formInputP">
          <label htmlFor="score" className="labelP">
            Rate your product
          </label>
          <input
            type="number"
            id="score"
            name="healthScore"
            value={form.healthScore}
            onChange={handleChange}
            className="inputP"
            onBlur={handleBlur}
          />
          {errors.healthScore && <p className="errors">{errors.healthScore}</p>}
        </section> */}
        {/*         <section className="formInputP">
          <label htmlFor="brand" className="labelP">
            Brand
          </label>
          <input
            name="brand"
            id="brand"
            type="text"
            className="inputP"
            value={form.brand}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.brand && <p className="errors">{errors.brand}</p>}
        </section> */}
        {/* <section className="formInputP">
          <label htmlFor="stock" className="labelP">
            Stock
          </label>
          <input
            name="stock"
            id="stock"
            type="number"
            className="inputP"
            value={form.stock}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.stock && <p className="errors">{errors.stock}</p>}
        </section> */}

        {/* {aca va cloudinary} */}
        <MyComponent/>
      </form>
  )
};

export default CreateProductFrom;