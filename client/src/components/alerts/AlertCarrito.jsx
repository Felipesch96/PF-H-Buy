import React from 'react';
import SweetAlert from 'react-bootstrap-sweetalert';
import { useSelector,useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlice";
import { useState } from 'react';


const AlertaCarrito =()=>{
  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const [alert,setAlert]=useState(false)
  
  const addElementToCart = () => {
    dispatch(addToCart(detailProduct))
  };
  const handleAlert = () => {
    setAlert(true);
    addElementToCart()
    setTimeout(() => {
      setAlert(false)
    }, 1500);
  }

  const handleConfirm = () => {
    setAlert(false);
  }

  const handleCancel = () => {
    setAlert(false);
  }

    return (
      <div>
        <button onClick={handleAlert} className="btn btn-primary btn-sm bi bi-cart-plus-fill">Agregar al carrito</button>
        {alert &&
          <SweetAlert
          title="Producto agregado al carrito"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
          success
          >
            ¡El producto se agrego correctamente!
          </SweetAlert>
        }
      </div>
    );
  }

export default AlertaCarrito;