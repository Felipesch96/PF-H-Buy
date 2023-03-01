import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import Filters from "../filters/Filters";
import LoaderCard from "../Loaders/CardLoader/CardLoader";
import "./Cards.css";
// importo los componentes que se renderizaran con el Loader "lazy"
const Card = lazy(() => import("../Card/Card"));
//

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const [input, setInput] = useState(1);

  const cardsCurrent = array.slice(
    (currentPage - 1) * cardsPerPage,
    (currentPage - 1) * cardsPerPage + cardsPerPage
  );

  return (
    <div class="container">
      <div class="row justify-content-start">
        <div class="mt-4 col-3 ">
          <Filters setCurrentPage={setCurrentPage} setInput={setInput} />
        </div>
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
                // array.length ? (
                cardsCurrent.map((element) => (
                  //Loader de Carga de las Cards
                  <Suspense
                    key={element._id}
                    fallback={<LoaderCard />}
                    class="row row-cols-3 m-3"
                  >
                    <div class="col">
                      <div class="card mb-3 rounded-4 bg-dark tarjeta">
                        <Card
                          img={element.img}
                          name={element.name}
                          price={element.price}
                          score={element.score}
                          category={element.category}
                          created={element.created}
                        />
                        <div class="ver-produto">
                          <Link to={`/products/${element._id}`}>
                            <button
                              type="button"
                              class="btn btn-primary btn-sm"
                            >
                              View Product
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Suspense>
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
