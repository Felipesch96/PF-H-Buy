import React from "react";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";


const CarouselCard = (props) => {

  return (
    <Link class="card tarjeta" to={`/products/${props._id}`}>
      <div class="card-body">
        <p class="card-title">{props.name}</p>
        <Rating
          style={{ fontSize: "17px" }}
          name="half-rating-read"
          value={props.score}
          precision={0.5}
          readOnly
        />
        <img
          src={props.img}
          class="img-fluid rounded-start mt-2"
          alt="..."
          style={{ height: "100px" }}
        />
      </div>
    </Link>

  )
};

export default CarouselCard;