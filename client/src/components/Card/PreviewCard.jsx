import React from "react";
import Rating from "@mui/material/Rating";

import "./Card.css";
import "../Cards/Cards.css";
import FavoriteButton from "../Favorites/Favorites";

const PreviewCard = (props) => {
  const formater = new Intl.NumberFormat("en");
  const imgError =
    "https://gesisarg.com/sistema-gestion/res/archivos/imagen_articulo_por_defecto.jpg";

  return (
    <>
      <div class="card mb-3 rounded-4 bg-dark tarjeta-preview">
        <div class="d-grid gap-2 d-md-block">
          <button
            class="btn btn-primary bi bi-cart-plus-fill m-2"
            type="button"
            disabled={true}
          ></button>
          <FavoriteButton disable={true} />
        </div>
        <div class="row g-0 tarjeta rounded-2">
          <div class="col-md-14">
            <img
              src={props.img ? props.img : imgError}
              class="img-fluid img-detail rounded-2 border bg-light"
              alt="..."
              style={{ height: "230px", objectFit: "cover" }}
            />
            <div class="card-body">
              <h5 class="card-title">
                {props.name ? props.name : "your product name"}
              </h5>
              <span
                class="card-text bg-success text-white rounded-1 p-1"
                style={{ fontSize: "20px" }}
              >
                ${props.price ? formater.format(props.price) : 0}
              </span>
              <br />
              <div class="container">
                <span class="card-text fs-6">Qualification: 5 ☆</span>
                <br />

                <Rating
                  style={{ fontSize: "17px" }}
                  name="half-rating-read"
                  value={5}
                  precision={0.5}
                  readOnly
                />
              </div>
              <span class="card-text fs-6">
                Category:{" "}
                {props.category ? props.category : "category of your product"}
              </span>
              <br />
              <span class="card-text fs-6">
                Stock: {props.stock ? props.stock : "stock of your product"}
              </span>
              <br />
              <div className="div-description-preview">
                <span class="card-text fs-6 description-preview">
                  Description: {props.description ? props.description : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="ver-produto">
          <button disabled={true} type="button" class="btn btn-primary btn-sm">
            View Product
          </button>
        </div>
      </div>
    </>
  );
};
export default PreviewCard;
