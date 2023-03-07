import { useDispatch, useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../product/productsModal.css";
import React, { useEffect, useState } from "react";
import { editProduct } from "../../../helpers/editProduct";


export const MyProductsModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { userLocal } = useSelector((state) => state.user);
  const { products } = useSelector((state) => state.product);
  const myProducts = products.filter(p => p.seller_id === userLocal._id);
  const myActiveProducts = myProducts.filter(p => p.isActive === "true");
  const myDeactiveProducts = myProducts.filter(p => p.isActive === "false");
  const [productToModify, setProductToModify] = useState();
  const [productId, setProductId] = useState();
  const [habilitar, setHabilitar] = useState(false);
  const [modifiedProduct, setModifiedProduct] = useState();


  const handleProductId = (e) => {
    setProductId(e.target.value);
  };
  console.log(productId);
  console.log(productToModify);

  useEffect(() => {
    const producto = myProducts.filter(p => p._id === productId);
    setProductToModify(producto[0]);
    setModifiedProduct({
      ...modifiedProduct,
      _id: productId
    })
  }, [productId]);
  console.log(modifiedProduct);

  const handlerModifiedProduct = async (e) => {
    setModifiedProduct({
      ...modifiedProduct,
      [e.target.name]: e.target.value
    });
  };

  const handleHabilitar = () => {
    if (habilitar) {
      setHabilitar(false);
    } else {
      setHabilitar(true);
    }
  };

  const handleSaveChanges = () => {
    setHabilitar(false);
    dispatch(editProduct(modifiedProduct));
  };

  return (
    <section className="my-products-modal">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="datos-my-products">
        <div className="file-producto">
          {
            myProducts?.map(p => {
              return (
                <div className="my-product">
                  <div className="div-my-product">
                    {
                      p.isActive
                        ? "Active"
                        : "Deactive"
                    }
                    {` ${p.name} ${p.model} ${p.brand} $ ${p.price}`}
                  </div>
                  <button
                    className="edit-button"
                    value={p._id}
                    onClick={(e) => handleProductId(e)}
                  >
                    edit
                  </button>
                </div>
              )
            })
          }
        </div>
        <div>
          {
            productToModify
              ? <div>
                <div>
                  <label htmlFor="">Check to modify</label>
                  <input type="checkbox" checked={habilitar} onChange={(e) => handleHabilitar(e)} />
                </div>
                <div>
                  {
                    habilitar
                      ? <input type="file" />
                      : <img src={productToModify.img_url} className="imagen-my-products" alt="" disabled />
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New name</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="name" />
                      </div>
                      : <div>
                        <label htmlFor="">Name</label>
                        <input type="text" value={productToModify.name} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New price</label>
                        <input type="number" onChange={(e) => handlerModifiedProduct(e)} name="price" />
                      </div>
                      : <div>
                        <label htmlFor="">Price</label>
                        <input type="text" value={productToModify.price} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New category</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="category" />
                      </div>
                      : <div>
                        <label htmlFor="">Category</label>
                        <input type="text" value={productToModify.category} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New brand</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="brand" />
                      </div>
                      : <div>
                        <label htmlFor="">Brand</label>
                        <input type="text" value={productToModify.brand} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New model</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="model" />
                      </div>
                      : <div>
                        <label htmlFor="">Model</label>
                        <input type="text" value={productToModify.model} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New condition</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="condition" />
                      </div>
                      : <div>
                        <label htmlFor="">Condition</label>
                        <input type="text" value={productToModify.condition} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New quantity</label>
                        <input type="number" onChange={(e) => handlerModifiedProduct(e)} name="stock" />
                      </div>
                      : <div>
                        <label htmlFor="">Stock</label>
                        <input type="text" value={productToModify.stock} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New status</label>
                        {/* <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="isActive" /> */}
                        <select className="status-select" name="isActive" id="" onChange={(e) => handlerModifiedProduct(e)}>
                          <option value="-">-</option>
                          <option value="true">true</option>
                          <option value="false">false</option>
                        </select>
                      </div>
                      : <div>
                        <label htmlFor="">Active?</label>
                        <input type="text" value={productToModify.isActive} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div>
                        <label htmlFor="">New description</label>
                        <input type="text" onChange={(e) => handlerModifiedProduct(e)} name="description" />
                      </div>
                      : <div>
                        <label htmlFor="">Description</label>
                        <input type="text" value={productToModify.description} disabled />
                      </div>
                  }
                </div>
                <div>
                  {
                    habilitar
                      ? <div className="save-button-my-products">
                        <button onClick={() => handleSaveChanges()}>Save changes</button>
                      </div>
                      : null
                  }
                </div>
              </div>
              : <>

              </>
          }
        </div>
      </div>
    </section>
  );
};