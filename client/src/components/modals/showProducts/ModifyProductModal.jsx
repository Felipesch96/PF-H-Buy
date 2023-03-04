import React, { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { editProduct } from "../../../helpers/editProduct";
import { EditProductCard } from "../../editProductCard";
import "./showProducts.css";


export const ModifyProductModal = ({ onClose }) => {
  const { products } = useSelector((state) => state.product);
  console.log(products);
  const [productId, setProductId] = useState();
  const [productToModify, setProductToModify] = useState();
  const [habilitar, setHabilitar] = useState(false);
  const [modifiedProduct, setModifiedProduct] = useState();
  // console.log(products);

  const handleProductId = (e) => {
    setProductId(e.target.value)
  };
  const handleModifySubmit = (e) => {
    e.preventDefault();
    const producto = products.filter(p => p._id === productId);
    // console.log(producto);
    setProductToModify(producto)
  };
  console.log(productId);
  console.log(productToModify)
  const handleHabilitar = () => {
    if (habilitar) {
      setHabilitar(false);
    } else {
      setHabilitar(true);
    }
  };

  const handlerModifiedProduct = (e) => {
    setModifiedProduct({
      ...modifiedProduct,
      [e.target.name]: e.target.value
    });
  };
  console.log(modifiedProduct);

  const handleSaveChanges = () => {
    editProduct(modifiedProduct)
  };

  return (
    <section className="modify-modal">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="categoriesList">
        {
          <div>
            <form onSubmit={(e) => handleModifySubmit(e)}>
              <label htmlFor="productToModify">Enter product id</label>
              <input type="text" id="productToModify" onChange={(e) => handleProductId(e)} />
              <button>Search</button>
            </form>
            <div>
              <label htmlFor="">Check to modify</label>
              <input type="checkbox" checked={habilitar} onChange={(e) => handleHabilitar(e)} />
            </div>
            <div className="modify-fields">
              {
                productToModify?.map(p => {
                  return (
                    <div className="datos-producto">
                      <div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <img src={p.img_url} alt="" className="img-modify" />
                          </div>
                          {
                            habilitar
                              ? <div className="save-button">
                                <button onClick={handleSaveChanges}>Save changes</button>
                              </div>
                              : null
                          }
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Name</label>
                            <input type="text" value={p.name} disabled />
                          </div>
                          <div>
                            {
                              habilitar
                                ? <div className="modify-fields">
                                  <label htmlFor="">New name</label>
                                  < input name="name" type="text" onChange={(e) => handlerModifiedProduct(e)} />
                                </div>
                                : null
                            }
                          </div>
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Condition</label>
                            <input type="text" value={p.condition} disabled />
                          </div>
                          {
                            habilitar
                              ? <div className="modify-fields">
                                <label htmlFor="">New condition</label>
                                <select name="condition" id="" onChange={(e) => handlerModifiedProduct(e)}>
                                  <option value="new">New</option>
                                  <option value="used">Used</option>
                                </select>
                              </div>
                              : null
                          }
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">isActive</label>
                            <input type="text" value={p.isActive} disabled />
                          </div>
                          {
                            habilitar
                              ? <div className="modify-fields">
                                <label htmlFor="">isActive?</label>
                                <select name="isActive" id="" onChange={(e) => handlerModifiedProduct(e)}>
                                  <option value="true">Yes</option>
                                  <option value="false">No</option>
                                </select>
                              </div>
                              : null
                          }
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Price</label>
                            <input type="text" value={p.price} disabled />
                          </div>
                          {
                            habilitar
                              ? <div className="modify-fields">
                                <label htmlFor="">New price</label>
                                <input name="price" type="text" onChange={(e) => handlerModifiedProduct(e)} />
                              </div>
                              : null
                          }
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Description</label>
                            <input type="text" value={p.description} disabled />
                          </div>
                          {
                            habilitar
                              ? <div className="modify-fields">
                                <label htmlFor="">New description</label>
                                <input name="description" type="text" onChange={(e) => handlerModifiedProduct(e)} />
                              </div>
                              : null
                          }
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Image</label>
                            <input type="text" value={p.img_public_id} disabled />
                          </div>
                          {
                            habilitar
                              ? <div className="modify-fields">
                                <label htmlFor="">Select new image</label>
                                <input type="file" />
                              </div>
                              : null
                          }
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        }
      </div>
    </section>
  );
};
