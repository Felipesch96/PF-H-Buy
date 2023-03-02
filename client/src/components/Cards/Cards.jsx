import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import { useSelector } from "react-redux";
import Filters from "../filters/Filters";
import "./Cards.css";

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const [input, setInput] = useState(1);

  const cardsCurrent = array.slice(
    (currentPage - 1) * cardsPerPage,
    (currentPage - 1) * cardsPerPage + cardsPerPage
  );
  const selectFilter = useSelector((state) => state.product.filter);
  // useEffect(() => {
  //   if (selectFilter.length && currentPage > array.length / 9)
  //     setCurrentPage(1);
  // }, [selectFilter, currentPage, array.length]);

  return (
    <div class="container">
      <div class="row justify-content-start">
        <div class="mt-4 col-3 filtros">
          <Filters setCurrentPage={setCurrentPage} setInput={setInput} />
        </div>
        {/* <span>PAGE: {currentPage}</span> */}
        <div class="col-9">
          <div class="container">
            <Paginate
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              cardsPerPage={cardsPerPage}
              input={input}
              setInput={setInput}
              array={array}
            />
            <div class="row row-cols-3">
              {Array.isArray(array) ? (
                cardsCurrent.map((element) => (
                  <div key={element._id} class="col">
                    <div class="card mb-3 rounded-4 bg-dark tarjeta">
                      <Card
                        img={element.img}
                        name={element.name}
                        price={element.price}
                        score={element.score}
                        category={element.category}
                      />
                      <div class="ver-produto">
                        <Link to={`/home/products/${element._id}`}>
                          <button type="button" class="btn btn-primary btn-sm">
                            View Product
                          </button>
                        </Link>
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
      </div>
    </div>
  );
};

export default Cards;
