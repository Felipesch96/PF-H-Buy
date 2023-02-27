import React from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useForm } from "../../../hooks/useForm";

const formValidations = (form, type) => {
  const reg = new RegExp('^[0-9]*$');
  const errors = {};

  if (type === "name" && !form.trim()) {
    errors.name = "The name of the product is required";
  }
  if (type === "description" && !form?.length > 0) {
    errors.description = "You must provide a short description of your product";
  }
  if (type === "price" && (form < 1 || !reg.test(form))) {
    errors.price = "Price must be a number higher than 0";
  }
  if (type === "stock" && (form < 1 || !reg.test(form))) {
    errors.stock = "You must provide at least 1 product";
  }
  if (type === "condition" && (!form || form === "Select an option")) {
    errors.condition = "Please select a condition";
  }
  if (type === "category" && (!form || form === "Select an option")) {
    errors.category = "Please select a category";
  }
  if (type === "photo" && !form) {
    errors.photo = "Please upload a photo";
  }
  return errors;
};

const initialForm = {
  name: "",
  img: "",
  price: "",
  description: "",
  category: "",
  stock: "",
  condition: "",
};


const CreateProductFrom = ({ onClose }) => {
  const { form, errors, handleNameBlur, handleChange, handleSubmitProduct,
    handlePriceBlur, handleDescBlur, handlePhotoBlur, handleStockcBlur, handleCondBlur, handleCatBlur} =
    useForm(initialForm, formValidations);

    const categories = useSelector((state) => state.product.categories)
    


  return (
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
            onBlur={handleNameBlur}
          />
          {errors.name && <span className="errors">{errors.name}</span>}
        </section>

      <section className="formInputP">
        <label  className="labelP">
          Add a photo
        </label>
        <input
          name="img"
          id="img"
          type="text"
          className="inputP"
          value={form.img}
          onChange={handleChange}
          onBlur={handlePhotoBlur}
        />
        {errors.photo && <p className="errors">{errors.photo}</p>}
      </section>

      <section className="formInputP">
        <label  className="labelP">
          Add a Price
        </label>
        <input
          name="price"
          id="price"
          type="text"
          className="inputP"
          value={form.price}
          onChange={handleChange}
          onBlur={handlePriceBlur}
        />
        {errors.price && <p className="errors">{errors.price}</p>}
      </section>

      <section className="formInputP">
        <label className="labelP">Select a category</label>
        <select onChange={handleChange} onBlur={handleCatBlur} name="category">
          <option>Select an option</option>
          {categories.map((element) => {
            return(
              <option key={element._id}>{element.name}</option>
            )
          })}
        </select>
        {errors.category && <p className="errors">{errors.category}</p>}
      </section>

      <section className="formInputP">
        <label className="labelP">
          Stock
        </label>
        <input
          name="stock"
          id="stock"
          type="text"
          className="inputP"
          value={form.stock}
          onChange={handleChange}
          onBlur={handleStockcBlur}
        />
        {errors.stock && <p className="errors">{errors.stock}</p>}
      </section>

      <section className="formInputP">
      <label className="labelP">Select a condition</label>
        <select onChange={handleChange} onBlur={handleCondBlur} name="condition">
          <option>Select an option</option>
          <option>new</option>
          <option>used</option>
          </select>
        {errors.condition && <p className="errors">{errors.condition}</p>}
      </section>

      <section className="formInputP">
        <label className="labelP">
          Describe your product
        </label>
        <textarea
          id="resume"
          name="description"
          onChange={handleChange}
          value={form.description}
          onBlur={handleDescBlur}
        ></textarea>
        {errors.description && <p className="errors">{errors.description}</p>}
      </section>

      {/* {aca va cloudinary} */}
      {form.name && form.description && form.category && form.condition && form.img &&
      form.price && form.stock && form.category !== "Select an option" && form.condition !== "Select an option"
      ?<button type="submit" className="productButton">Create</button>
      :<span className="errors">Please fill the blanks to create a product</span>}
       
    </form>
  );
};

export default CreateProductFrom;
