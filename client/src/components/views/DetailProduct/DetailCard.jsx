import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../../customHooks/UseLocalStore";
import { addToCart } from "../../../redux/slices/cartSlice";
import FavoriteButton from "../../Favorites/Favorites";
import StarRating from "../../StarRating/StarRating";
import "./DetailProduct.css";
import moment from "moment";
import { Link } from "react-router-dom";
import Questions from "./Questions";
import { editProduct } from "../../../helpers/editProduct";
import { fetchUserById } from "../../../redux/thunks/userThunk";

const DetailCard = () => {
  const dispatch = useDispatch();

  const {userLocal} = useSelector(state => state.user);
  const cart = useSelector((state) => state.cart.cartList);
  const detailProduct = useSelector((state) => state.product.detailproduct);
  console.log(detailProduct)

  const [history, setHistory] = useLocalStorage("history", []);


  const thisProduct = cart.find((element) => element._id === detailProduct._id);

  const verifyHistory = history.filter(
    (Element) => Element._id === detailProduct._id
  );

  const formater = new Intl.NumberFormat("en");

  useEffect(() => {
    if (!verifyHistory.length) {
      if (history.length > 7) {
        history[0] = detailProduct;
      }
      setHistory([...history, detailProduct]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailProduct]);

  const addElementToCart = () => {
    if (thisProduct) {
      if (detailProduct.stock > thisProduct.quantity) {
        dispatch(addToCart(detailProduct));
      } else {
        window.alert("No more products available");
      }
    } else {
      if (detailProduct.stock > 0) {
        dispatch(addToCart(detailProduct));
      } else {
        window.alert("Not in stock");
      }
    }
  };
  ///
  const date = detailProduct.created;
  const formatDate = moment(date).format("MMMM Do YYYY, h:mm a");
  // const ago = ; //moment(formatDate).format("MMMM Do YYYY, h:mm:ss a");


  
  return (
    <div className="container-fluid p-4 contenedor-detalle">
      <div class="card center info">
        <div class="row g-10">
          <div class="col-5 col-sm-4 mb-1">
            <img
              src={detailProduct.img_url}
              class="img-fluid w-100 m-2 img-detail"
              alt="card-horizontal"
            />
          </div>
          <div class="col">
            <div class="col-7 col-sm-8">
              <div class="card-body">
                <h2 class="card-title">{detailProduct.name}</h2>
                <div>
                  <span class="card-text">Stock :</span>{" "}
                  {detailProduct.stock ? (
                    <span class="text-success">{detailProduct.stock}</span>
                  ) : (
                    <span class="text-danger">off</span>
                  )}
                </div>
                <h4
                  class="card-text text-white rounded-2 bg-success p-1 bg-opacity-70"
                  style={{
                    textAlign: "center",
                    display: "inline-block",
                  }}
                >
                  <i class="bi bi-currency-dollar"></i>
                  {formater.format(detailProduct.price)}
                </h4>
                <br />
                {detailProduct.score ? (
                  <>
                    <p class="card-text mb-1">
                      Qualification: {detailProduct.score} ☆
                    </p>
                    <div class="container">
                      <StarRating score={detailProduct.score} />
                    </div>
                  </>
                ) : (
                  <>
                    <span>there are no grades</span>
                  </>
                )}
                <div class="card-text mt-3">
                  {/* <span class="text-muted">Last updated 3 mins ago</span> */}
                  <span class="text-muted">
                    Published: <strong>{formatDate}</strong>{" "}
                  </span>
                </div>
              </div>
              <Link
                to="/shoppingCart"
                class="btn btn-success bi bi-cart-plus-fill m-3"
                onClick={addElementToCart}
              >
                Buy product
              </Link>

              <button
                onClick={addElementToCart}
                className="btn btn-primary bi bi-cart-plus-fill m-3"
              >
                Add to Cart
              </button>

              <FavoriteButton
                class="fa-regular fa-heart"
                onClick={() => {
                  Swal.fire({
                    color: "white",
                    background: "#1299",
                    icon: "success",
                    title: "Producto agregado a favoritos.",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                }}
              />
            </div>
          </div>

          <nav class="mt-1 nav justify-content-center pestanas">
            <div class="nav nav-tabs" id="nav-tab" role="tablist">
              <button
                class="nav-link active"
                id="nav-description-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-description"
                type="button"
                role="tab"
                aria-controls="nav-description"
                aria-selected="true"
              >
                Description
              </button>
              <button
                class="nav-link"
                id="nav-characteristics-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-characteris"
                type="button"
                role="tab"
                aria-controls="nav-characteris"
                aria-selected="false"
              >
                Characteristics
              </button>
              <button
                class="nav-link"
                id="nav-reviews-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-review"
                type="button"
                role="tab"
                aria-controls="nav-review"
                aria-selected="false"
              >
                Reviews
              </button>
              <button
                class="nav-link"
                id="nav-question-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-question"
                type="button"
                role="tab"
                aria-controls="nav-question"
                aria-selected="false"
              >
                Questions
              </button>
            </div>
          </nav>
          <div class="tab-content" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-description"
              role="tabpanel"
              aria-labelledby="nav-description-tab"
            >
              <span class="card-text text-center m-3 d-flex justify-content-center">
                {detailProduct.description}
              </span>
            </div>
            <div
              class="tab-pane fade m-3"
              id="nav-characteris"
              role="tabpanel"
              aria-labelledby="nav-characteris-tab"
            >
              <table class="table">
                <thead>
                  <tr class="table-primary">
                    <th scope="col">Name</th>
                    <th scope="col">State</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{detailProduct.name}</th>
                    <th scope="row">{detailProduct.condition}</th>
                    <th scope="row">
                      {detailProduct.brand ? (
                        detailProduct.brand
                      ) : (
                        <span class="text-warning">not specified</span>
                      )}
                    </th>
                    <th scope="row">
                      {detailProduct.model ? (
                        detailProduct.model
                      ) : (
                        <span class="text-warning">not specified</span>
                      )}
                    </th>
                    <th scope="row">
                      {detailProduct.category ? (
                        detailProduct.category
                      ) : (
                        <span class="text-warning">not specified</span>
                      )}
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade m-3"
              id="nav-review"
              role="tabpanel"
              aria-labelledby="nav-review-tab"
            >
              <div class="container">
                {/* {detailProduct.reviews.length ?  */}
                <div>
                  {detailProduct.reviews?.length === 0 ? (
                    <span class="card-text text-center text-danger-emphasis h5 m-3 d-flex justify-content-center">
                      No hay ningun comentario acerca de este producto
                    </span>
                  ) : (
                    detailProduct.reviews?.map((r) => {
                      return (
                        <>
                          <div class="card mt-3 logouser">
                            <div class="card-header bg-info h5">
                              <img
                                alt={r.userName}
                                src={r.userImage}
                                class="rounded-5 imgUser"
                                style={{ height: "40px" }}
                              />
                              {/* <i class="bi bi-person-circle h3 "> </i> */}{" "}
                              {r.userName} {r.userLastName}
                            </div>
                            <div class="card-body">
                              <h5 class="card-title">Review</h5>
                              <p class="card-text">
                                Qualification: {r.qualification}{" "}
                                <StarRating score={r.qualification} />
                              </p>
                              <p class="card-text comment">
                                Comment:
                                <div class="p-3 bg-info bg-opacity-10 border border-light-subtle rounded-2">
                                  {r.comment}
                                </div>
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })
                  )}
                </div>
              </div>
            </div>
            <div
              className="question-text"
              class="tab-pane fade m-3"
              id="nav-question"
              role="tabpanel"
              aria-labelledby="nav-question-tab"
              onClick={fetchUserById(detailProduct.seller_id)}
            >
              <Questions
              
              product_id={detailProduct?._id} 
              seller_id={detailProduct?.seller_id}
              name={detailProduct?.name} 
              model={detailProduct?.model} 
              brand={detailProduct?.brand} 
              price={detailProduct?.price}
              producto={detailProduct}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
