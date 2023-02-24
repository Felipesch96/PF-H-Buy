import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
// import { fetchProducts } from "../../redux/thunks/productThunk";
import "./Cards.css";

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
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
              <div class="card mb-3 bg-dark">
                <Card
                  key={element._id}
                  img={element.img}
                  name={element.name}
                  price={element.price}
                  score={element.score}
                  category={element.category}
                />
                <div class="ver-produto">
                  <Link to={`/products/${element._id}`}>
                    <a
                      class="btn btn-outline-primary btn-sm"
                      href="#"
                      data-abc="true"
                    >
                      View Product
                    </a>
                  </Link>
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