import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
// import { fetchProducts } from "../../redux/thunks/productThunk";
import "./Cards.css";

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const max = Math.ceil(array.length / cardsPerPage);

  return (
    <div class="container">
      <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        max={max}
      />
      <div class="row row-cols-3">
        {Array.isArray(array) ? (
          array
            .slice(
              (currentPage - 1) * cardsPerPage,
              (currentPage - 1) * cardsPerPage + cardsPerPage
            )
            .map((element) => (
              <div key={element._id} class="col">
                <div class="card mb-3 bg-dark">
                  <Card
                    img={element.img}
                    name={element.name}
                    price={element.price}
                    score={element.score}
                    category={element.category}
                  />
                  <div className="ver-produto">
                    <Link to={`/products/${element._id}`}>View Product</Link>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <h2>{array}</h2>
        )}
      </div>
    </div>
  );
};

export default Cards;
