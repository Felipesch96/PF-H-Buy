import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div class="card mb-3">
      <div class="row g-0">

          <img src={props.img} class="img-fluid rounded-start" alt="..." style={{maxWidth:"220px",height:"150px"}}/>
        <div class="col-md-12">
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
              ${props.price}
            </p>
            <p class="card-text">Qualification: {props.calification} ☆</p>
            <p class="card-text">Category: {props.categories}</p>

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
