import React, { useEffect } from "react";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { fetchProducts } from "../../redux/thunks/productThunk";
import "./Cards.css"

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
              <div class="col">
                <div class="card mb-3">
                  <Card
                    key={element._id}
                    img={element.img}
                    name={element.name}
                    price={element.price}
                    score={element.score}
                    category={element.category}
                  />
                  <div class="card-body text-center-body">
                    <button
                      class="btn btn-outline-primary btn-sm"
                      href="#"
                      data-abc="true"
                    >
                      <Link to={`/products/${element._id}`}>View Product</Link>
                    </button>
                  </div>
                </div>
              </div>
            ))
        ) : (
          <h2>{array}</h2>
        )}
      </div>
      {/* <Paginate
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        max={max}
      /> */}
    </div>
  );
};

export default Cards;
