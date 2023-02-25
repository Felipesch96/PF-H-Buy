import React from "react";
import Rating from "@mui/material/Rating";


import "./Card.css";
const Card = (props) => {
  const formater = new Intl.NumberFormat("en");
  //comentariosss

  return (
    <div class="row g-0 tarjeta">
      <div class="col-md-12">
        <img 
          src={props.img}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src="https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg";}}
          class="img-fluid bg-light img-detail"
          alt="..."
          style={{ height: "230px" }}
        />
        <hr />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p
            class="card-text bg-success text-white rounded-2"
            style={{
              textAlign: "center",
              display: "inline-block",
              padding: "3px",
            }}
          >
            ${formater.format(props.price)}
          </p>
          <div class="container">
            <p class="card-text mb-1">Qualification: {props.score} ☆</p>

            <Rating
              style={{ fontSize: "17px" }}
              name="half-rating-read"
              value={props.score}
              precision={0.5}
              readOnly
            />
          </div>

          <p class="card-text">Category: {props.category}</p>

          <p class="card-text">
            <small class="text-muted">Published: fecha de creacion del producto</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
