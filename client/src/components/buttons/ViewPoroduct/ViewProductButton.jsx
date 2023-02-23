import React from "react";
import { Link } from "react-router-dom";

export const ViewProductButton = (props) => {

  return (
    <div class="card-body text-center-body">
      <Link to={`/products/${props._id}`}>
        <a
          class="btn btn-outline-primary btn-sm"
          href=""
          data-abc="true"
        >
          View Product
        </a>
      </Link>
    </div>
  )
};

export default ViewProductButton;