import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useForm } from "../../../hooks/useForm";

const formValidations = (form) => {
  let errors = {};
  if (!form.name.trim()) {
    errors.name = "The name of the product is required";
  }
  if (!form.description.length > 0) {
    errors.description = "You must provide a description of your product";
  }
  if (!form.category.length > 0) {
    errors.category = "You must provide a category of your product";
  }
  return errors;
};
const initialForm = {
  name: "",
  img: "",
  price: 0,
  description: "",
  category: "",
  stock: 1,
  condition: "",
};
const CreateProductFrom = ({ onClose }) => {
  const { form, errors, handleBlur, handleChange, handleSubmitProduct } =
    useForm(initialForm, formValidations);

  return (
    <section>
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
            value={form.name}
            onChange={handleChange}
            className="inputP"
            onBlur={handleBlur}
          />
          {errors.name && <span className="errors">{errors.name}</span>}
        </section>

        <section className="formInputP">
          <label className="labelP">Add a photo</label>
          <input
            name="img"
            id="img"
            type="text"
            className="inputP"
            value={form.img}
            onChange={handleChange}
          />
          {/* {errors.name && <span>{errors.name}</span>} */}
        </section>

        <section className="formInputP">
          <label className="labelP">Add a Price</label>
          <input
            name="price"
            id="price"
            type="number"
            className="inputP"
            value={form.price}
            onChange={handleChange}
          />
          {/* {errors.name && <span>{errors.name}</span>} */}
        </section>

        <section className="formInputP">
          <label className="labelP">Add Category</label>
          <input
            type="text"
            id="category"
            name="category"
            className="inputP"
            onChange={handleChange}
            value={form.category}
            onBlur={handleBlur}
          />
          {errors.name && <span className="errors">{errors.category}</span>}
        </section>

        <section className="formInputP">
          <label className="labelP">Stock</label>
          <input
            name="stock"
            id="stock"
            type="number"
            className="inputP"
            value={form.stock}
            onChange={handleChange}
          />
          {errors.stock && <span className="errors">{errors.stock}</span>}
        </section>

        <section className="formInputP">
          <label className="labelP">Condition</label>
          <input
            name="condition"
            id="condition"
            type="text"
            className="inputP"
            value={form.condition}
            onChange={handleChange}
          />
          {errors.stock && <span className="errors">{errors.stock}</span>}
        </section>

        <section className="formInputP">
          <label className="labelP">Describe your product</label>
          <textarea
            id="resume"
            name="description"
            onChange={handleChange}
            value={form.description}
            onBlur={handleBlur}
          ></textarea>
          {errors.description && <span className="errors">{errors.description}</span>}
        </section>

        {/* {aca va cloudinary} */}
        <button type="submit" className="productButton">
          Crear
        </button>
      </form>
    </section>
  );
};

export default CreateProductFrom;
