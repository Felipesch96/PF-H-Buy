import { FiEdit2 } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiOutlineSave } from "react-icons/ai";
import { useState } from "react";
import "./editProductCard.css";
import { editProduct } from "../../helpers/editProduct";
import { deleteProduct } from "../../helpers/deleteProduct";

export const EditProductCard = ({ product }) => {
  const [edit, setEdit] = useState(false);
  const [selected, setSelected] = useState({
    name: false,
    description: false,
    brand: false,
    price: false,
    stock: false,
  });

  const [newProduct, setNewProduct] = useState({
    _id: product._id,
    name: product.name,
    description: product.description,
    price: product.price,
  });
  const handleOnClickEdit = ({ target }) => {
    if (edit) setSelected({ ...selected, [target.id]: true });
  };

  const handleOnChange = ({ target }) => {
    setNewProduct({ ...newProduct, [target.name]: target.value });
  };

  const onDelete = (id) => {
    deleteProduct(id);
  };
  const submitChanges = (e) => {
    e.preventDefault();
    editProduct(newProduct);
    setEdit(false);
  };
  return (
    <div className="productDetails">
      {selected.name ? (
        <input
          className="updateInput"
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, name: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="name">
          {newProduct.name}
        </span>
      )}
      {/* {selected.description ? (
        <input
          className="updateInput"
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, description: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="description">
          {newProduct.description}
        </span>
      )} */}
      {selected.brand ? (
        <input
          className="updateInput"
          type="text"
          name="brand"
          value={newProduct.brand}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, brand: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="brand">
          {newProduct.brand}
        </span>
      )}
      {selected.price ? (
        <input
          className="updateInput"
          type="text"
          name="price"
          value={newProduct.price}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, price: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="price">
          {newProduct.price}
        </span>
      )}
      {selected.stock ? (
        <input
          className="updateInput"
          type="text"
          name="stock"
          value={newProduct.stock}
          onChange={handleOnChange}
          onBlur={() => {
            setSelected({ ...selected, stock: false });
          }}
        />
      ) : (
        <span onClick={handleOnClickEdit} id="stock">
          {newProduct.stock}
        </span>
      )}
      <FiEdit2 onClick={() => setEdit(!edit)} />
      {!edit && <MdDelete onClick={() => onDelete(newProduct.id)} />}
      {edit && <AiOutlineSave onClick={submitChanges} />}
    </div>
  );
};
