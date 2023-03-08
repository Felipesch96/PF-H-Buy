import React, { useState } from "react";
import { Link } from "react-router-dom";
import Paginate from "../Paginate/Paginate";
import Filters from "../filters/Filters";
import "./Cards.css";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { addToCart } from "../../redux/slices/cartSlice";
import FavoriteButton from "../Favorites/Favorites";
import { Button } from "@mui/material";
import { fetchProducts } from "../../redux/thunks/productThunk";
import Card from "../Card/Card";
import CardLoader from "../CardLoader/CardLoader";
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

  function clearFilter() {
    dispatch(
      fetchProducts({
        filters: {},
        order: {},
      })
    );
  }

  return (
    <div class="container">
      <div class="row justify-content-start">
        {!array.length ? (
          <CardLoader />
        ) : (
          <>
            {" "}
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
                <div class="row row-cols-3 mb-5">
                  {Array.isArray(array) ? (
                    // array.length ? (
                    cardsCurrent.map((element) => (
                      <div key={element._id} class="p-3">
                        <div class="card mb-3 rounded-4 bg-dark tarjeta2">
                          <div className="cart-fav">
                            <button
                              onClick={() => {
                                if (thisProduct) {
                                  if (element.stock > thisProduct.quantity) {
                                    dispatch(addToCart(element));
                                    Swal.fire({
                                      position: "top-end",
                                      icon: "success",
                                      title: "Product added to cart.",
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
                                      color: "white",
                                      background: "#1299",
                                      icon: "success",
                                      title: "Product added to cart.",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });
                                  } else {
                                    Swal.fire({
                                      color: "white",
                                      background: "#1299",
                                      icon: "error",
                                      title: "No more stock.",
                                      showConfirmButton: false,
                                      timer: 1500,
                                    });
                                  }
                                }
                              }}
                              class="btn btn-primary bi bi-cart-plus-fill m-2"
                              type="button"
                            ></button>
                            <FavoriteButton productId={element._id} />
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
                    ))
                  ) : (
                    <div class="container error">
                      <div class="alert alert-warning" role="alert">
                        <Button
                          onClick={clearFilter}
                          class="alert"
                          style={{ textDecoration: "none" }}
                        >
                          <i
                            class="bi bi-exclamation-triangle-fill"
                            style={{ fontSize: "40px" }}
                          />
                          <br />
                          "{array}",
                          <hr />
                          <strong>click to go back </strong>
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
                
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cards;
