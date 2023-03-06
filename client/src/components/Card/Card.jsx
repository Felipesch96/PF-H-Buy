import React from "react";
import Rating from "@mui/material/Rating";
import moment from "moment";

import "./Card.css";
const Card = (props) => {
  const formater = new Intl.NumberFormat("en");
  const date = props.created;
  const formatDate = moment(date).format("MMMM Do YYYY");
  const imgError =
    "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg";

  return (
    <div class="row g-0 tarjeta rounded-2">
      <div class="col-md-14">
        <img
          src={props.img ? props.img : imgError}
          class="img-fluid img-detail rounded-2 border bg-light"
          alt="..."
          style={{ height: "230px", objectFit: "cover" }}
        />
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <span
            class="card-text bg-success text-white rounded-1 p-1"
            style={{ fontSize: "20px" }}
          >
            ${formater.format(props.price)}
          </span>
          <br />
          {props.score ? (
            <div class="container">
              <span class="card-text fs-6">Qualification: {props.score} ☆</span>

              <Rating
                style={{ fontSize: "17px" }}
                name="half-rating-read"
                value={props.score}
                precision={0.5}
                readOnly
              />
            </div>
          ) : null}

          <span class="card-text fs-6">Category: {props.category}</span>

          <p class="card-text">
            <small class="text-muted">Published: {formatDate}</small>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Card;
