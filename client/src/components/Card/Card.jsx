import Rating from "@mui/material/Rating";
import React from "react";

import "./Card.css";
const Card = (props) => {
  const formater = new Intl.NumberFormat("en");

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
        </div>
      </div>
    </div>
  );
};
export default Card;
