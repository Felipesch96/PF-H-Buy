import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import Filters from "../filters/Filters";
import LoaderCard from "../Loaders/CardLoader/CardLoader";
import "./Cards.css";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/slices/cartSlice";
import FavoriteButton from "../Favorites/Favorites";
// importo los componentes que se renderizaran con el Loader "lazy"
const Card = lazy(() => import("../Card/Card"));
//

const Cards = ({ array }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(9);
  const [input, setInput] = useState(1);

  const dispatch = useDispatch();
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const cart = useSelector((state) => state.cart.cartList);
  const thisProduct = cart.find((element) => element._id === detailProduct._id);

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
                      <div class="d-grid gap-2 d-md-block">
                        <button
                          onClick={() => {
                            if (thisProduct) {
                              if (element.stock > thisProduct.quantity) {
                                dispatch(addToCart(element));
                                console.log(element);
                                Swal.fire({
                                  position: "top-end",
                                  icon: "success",
                                  title: "Producto agregado al carrito.",
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                              } else {
                                window.alert("No more products available");
                              }
                            } else {
                              if (element.stock > 0) {
                                dispatch(addToCart(element));
                                Swal.fire({
                                  color:"white",
                                  background:"#1299",
                                  icon: "success",
                                  title: "Producto agregado al carrito.",
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                              } else {
                                Swal.fire({
                                  color:"white",
                                  background:"#1299",
                                  icon: "error",
                                  title: "Producto sin stock.",
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                              }
                            }
                          }}
                          class="btn btn-primary bi bi-cart-plus-fill m-2"
                          type="button"
                        ></button>
                        <FavoriteButton />
                      </div>
                        <Card
                          img={element.img_url}
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
