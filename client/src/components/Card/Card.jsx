import React from "react";
import "./Card.css";
const Card = (props) => {
  const formater = new Intl.NumberFormat("en");

  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-12">
          <img
            src={props.img}
            class="img-fluid rounded-start mt-2"
            alt="..."
            style={{ height: "230px" }}
          />
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
            <p class="card-text">Qualification: {props.score} ☆</p>
            <p class="card-text">Category: {props.category}</p>

            <p class="card-text">
              <small class="text-muted">Last updated 3 mins ago</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
