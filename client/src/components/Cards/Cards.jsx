import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Filters from "../filters/Filters";
// import { fetchProducts } from "../../redux/thunks/productThunk";
import "./Cards.css";
import { fontSize } from "@mui/system";

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  // const pages = Math.ceil(array.length / cardsPerPage);
  const cardsCurrent = array.slice(
    (currentPage - 1) * cardsPerPage,
    (currentPage - 1) * cardsPerPage + cardsPerPage
  );

  // const paginate = (page) => {
  //   setCurrentPage(page);
  // };
  return (
    <div class="container">
      <div class="container">
        <Paginate
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          cardsPerPage={cardsPerPage}
          array={array}

          // paginate={paginate}
        />
        <div class="row row-cols-3">
          {Array.isArray(array) ? (
            cardsCurrent.map((element) => (
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
