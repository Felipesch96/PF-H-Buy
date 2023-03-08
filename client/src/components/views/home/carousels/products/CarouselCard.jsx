import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import './CarouselCard.css'

const CarouselCard = (props) => {
  return (
    <Link class="backgroud_card card card-prod-carousel text-center" to={`/products/${props._id}`}>
      <div class="card-body">
        <p class="badge bg-light text-wrap text-dark">{props.name}</p><br />
        <span class="badge bg-light text-wrap text-success" style={{ fontSize: "12px" }}>$ {props.price}</span><br />

        <Rating
          style={{ fontSize: "17px" }}
          name="half-rating-read"
          value={props.score}
          precision={0.5}
          readOnly
        />
        <hr />
        <img
          src={props.img}
          class="img-fluid"
          alt="..."
          style={{ maxHeight: "100px",display: "block",
          margin: "auto"}}
        />
      </div>
    </Link>
  );
};

export default CarouselCard;
