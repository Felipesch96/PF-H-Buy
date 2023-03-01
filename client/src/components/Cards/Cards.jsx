import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginate from "../Paginate/Paginate";
import Filters from "../filters/Filters";
import "./Cards.css";
import Rating from "@mui/material/Rating";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/slices/cartSlice";
import FavoriteButton from "../Favorites/Favorites";

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
                                  position: "top-end",
                                  icon: "success",
                                  title: "Producto agregado al carrito.",
                                  showConfirmButton: false,
                                  timer: 1500,
                                });
                              } else {
                                Swal.fire({
                                  position: "top-end",
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
                        img={element.img}
                        name={element.name}
                        price={element.price}
                        score={element.score}
                        category={element.category}
                      />
                      <div class="ver-produto">
                        <Link to={`/products/${element._id}`}>
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
