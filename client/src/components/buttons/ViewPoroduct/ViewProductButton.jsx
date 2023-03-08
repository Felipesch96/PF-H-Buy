import React from "react";
import { Link } from "react-router-dom";

export const ViewProductButton = (props) => {
  return (
    <div class="card-body text-center-body">
      <Link to={`/products/${props._id}`}>View Product</Link>
    </div>
  );
};

export default ViewProductButton;
