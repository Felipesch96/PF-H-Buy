import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { editProduct } from "../../../helpers/editProduct";
import { fetchProducts } from "../../../redux/thunks/productThunk";
import { EditProductCard } from "../../editProductCard";
import "./showProducts.css";


export const ModifyProductModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);
  const [productId, setProductId] = useState();
  const [productToModify, setProductToModify] = useState();
  const [habilitar, setHabilitar] = useState(false);
  const [modifiedProduct, setModifiedProduct] = useState();

  const [imgPreview, setImgPreview] = useState();

  const handleProductId = (e) => {
    setProductId(e.target.value)
  };
  const handleModifySubmit = (e) => {
    e.preventDefault();
    const producto = products.filter(p => p._id === productId);
    setProductToModify(producto);
    setModifiedProduct({
      ...modifiedProduct,
      _id: producto[0]._id
    });
  };
  const handleHabilitar = () => {
    if (habilitar) {
      setHabilitar(false);
    } else {
      setHabilitar(true);
    }
  };

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

  const handlerModifiedImage = async (e) => {
    if (e.target.name === "img") {
      const files = e.target.files;
      const base64 = await convertBase64(files[0]);
      setModifiedProduct({
        ...modifiedProduct,
        img: base64
      });
    }
  }
  const handlerModifiedProduct = async (e) => {
    setModifiedProduct({
      ...modifiedProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleSaveChanges = () => {
    setHabilitar(false);
    dispatch(editProduct(modifiedProduct));
  };

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
                        <div className="inputs images">
                          <div className="modify-fields">
                            <img src={p.img_url} alt="" className="img-modify" />
                          </div>
                          <div>
                            {
                              imgPreview
                                ? <img src={imgPreview} className="img-modify" />
                                : null
                            }
                          </div>
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
                            <label htmlFor="">Brand</label>
                            <input type="text" value={p.brand} disabled />
                          </div>
                          <div>
                            {
                              habilitar
                                ? <div className="modify-fields">
                                  <label htmlFor="">New brand</label>
                                  < input name="brand" type="text" onChange={(e) => handlerModifiedProduct(e)} />
                                </div>
                                : null
                            }
                          </div>
                        </div>
                        <div className="inputs">
                          <div className="modify-fields">
                            <label htmlFor="">Model</label>
                            <input type="text" value={p.model} disabled />
                          </div>
                          <div>
                            {
                              habilitar
                                ? <div className="modify-fields">
                                  <label htmlFor="">New model</label>
                                  < input name="model" type="text" onChange={(e) => handlerModifiedProduct(e)} />
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
                                  <option value={null}>-</option>
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
                                  <option value={null}>-</option>

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
                              ? <div className="modify-fields" onChange={(e) => handlerImgPreview(e)}>
                                <label htmlFor="">Select new image</label>
                                <input name="img" type="file" onChange={(e) => handlerModifiedImage(e)} />
                              </div>
                              : null
                          }
                        </div>
                        <div>
                          {
                            habilitar
                              ? <div className="save-button">
                                <button onClick={() => handleSaveChanges()}>Save changes</button>
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
