import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import "./Cards.css";

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const cardsCurrent = array.slice(
    (currentPage - 1) * cardsPerPage,
    (currentPage - 1) * cardsPerPage + cardsPerPage
  );
  return (
    <div class="container">
      <div class="container">
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cardsPerPage={cardsPerPage}
          array={array}
        />
        <div class="row row-cols-3">
          {Array.isArray(array) ? (
            cardsCurrent.map((element) => (
              <div key={element._id} class="col">
                <div class="card mb-3 bg-dark">
                  <Card
                    img={element.img}
                    name={element.name}
                    price={element.price}
                    score={element.score}
                    category={element.category}
                  />
                  <div class="ver-produto">
                    <Link to={`/products/${element._id}`}>View Product</Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div class="container error">
              <div class="alert alert-danger" role="alert">
                <a
                  href="/products"
                  class="alert"
                  style={{ textDecoration: "none" }}
                >
                  <i
                    class="bi bi-exclamation-triangle-fill"
                    style={{ fontSize: "30px" }}
                  />
                  "{array}", <strong>click to go back </strong>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
