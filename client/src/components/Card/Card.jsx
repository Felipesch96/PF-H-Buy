import Rating from "@mui/material/Rating";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/slices/cartSlice";
import FavoriteButton from "../Favorites/Favorites";

import "./Card.css";
const Card = (props) => {
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const dispatch = useDispatch();
  const formater = new Intl.NumberFormat("en");

  const addElementToCart = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Producto agregado al carrito.",
      showConfirmButton: false,
      timer: 1500,
    });
    dispatch(addToCart(detailProduct));
  };

  return (
    <div class="row g-0 tarjeta">
      <div class="col-md-12">
        <img
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src =
              "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg";
          }}
          src={props.img}
          class="img-fluid img-detail rounded-start bg-light"
          alt="..."
          style={{ height: "230px" }}
        />
        <hr />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <span
            class="card-text bg-success text-white rounded-2"
            style={{
              textAlign: "center",
              display: "inline-block",
              padding: "3px",
            }}
          >
            ${formater.format(props.price)}
          </span>
          <div class="container">
            <span class="card-text mb-1">Qualification: {props.score} ☆</span>

            <Rating
              style={{ fontSize: "17px" }}
              name="half-rating-read"
              value={props.score}
              precision={0.5}
              readOnly
            />
          </div>

          <span class="card-text">Category: {props.category}</span>

          <span class="card-text">
            <small class="text-muted">
              Published: fecha de creacion del producto
            </small>
          </span>
          <div class="d-grid gap-2 d-md-block">
            <button
              onClick={addElementToCart}
              class="btn btn-primary bi bi-cart-plus-fill m-2"
              type="button"
            ></button>
            <FavoriteButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
