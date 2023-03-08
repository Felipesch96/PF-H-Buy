import moment from "moment";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../../customHooks/UseLocalStore";
import { addToCart } from "../../../redux/slices/cartSlice";
import selectCategories from "../../Card/selectCategories";
import FavoriteButton from "../../Favorites/Favorites";
import StarRating from "../../StarRating/StarRating";
import "./DetailProduct.css";

const DetailCard = () => {
  const dispatch = useDispatch();
  const [history, setHistory] = useLocalStorage("history", []);
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const sellerDetail = detailProduct.seller_id;
  console.log(sellerDetail)
  const cart = useSelector((state) => state.cart.cartList);
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
        Swal.fire({
          color: "white",
          position: "center",
          icon: "success",
          background: "#1299",
          title: "Product added to cart.",
          showConfirmButton: false,
          timer: 1500,
        });
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

  ///
  return (
    <div className="container-fluid p-4 contenedor-detalle">
      <div class="card center info">
        <div class="row g-10">
          <div class="col-5 col-sm-3 mb-1">
            <img
              src={detailProduct.img_url}
              class="img-fluid w-100 m-2 mt-4 img-detail"
              alt="card-horizontal"
              style={{ maxHeight: "60vh" }}
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

            </div>
          </div>
          <div class="container mt-4">
            <nav class="mt-1 nav justify-content-center p-1 pestanas">
              <div
                class="nav nav-tabs rounded-3 tabs"
                id="nav-tab"
                role="tablist"
              >
                <button
                  class="nav-link active btn"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-about"
                  type="button"
                  role="tab"
                  aria-controls="nav-about"
                  aria-selected="true"
                >
                  About the seller
                  <i class="bi bi-person-bounding-box"></i>
                </button>
                <button
                  class="nav-link btn"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-description"
                  type="button"
                  role="tab"
                  aria-controls="nav-description"
                  aria-selected="false"
                >
                  Description
                  <i class="bi bi-bookmarks"></i>
                </button>
                <button
                  class="nav-link btn"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-characteris"
                  type="button"
                  role="tab"
                  aria-controls="nav-characteris"
                  aria-selected="false"
                >
                  Characteristics
                  <i class="bi bi-check2-all"></i>
                </button>
                <button
                  class="nav-link btn"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-review"
                  type="button"
                  role="tab"
                  aria-controls="nav-review"
                  aria-selected="false"
                >
                  Reviews
                  <i class="bi bi-chat-left-text-fill"></i>
                </button>
              </div>
            </nav>

            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active bg-light m-3 rounded-3"
                id="nav-about"
                role="tabpanel"
                aria-labelledby="nav-about-tab"
              >
                <span class="card-text text-center p-3 h5 m-3 d-flex justify-content-center">
                <table class="table">
                  <thead>
                      <tr class="table-dark">
                      <th scope="col">Profile Picture</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-light">
                      <th scope="row"><img src={sellerDetail.image} /></th>
                      <th scope="row">{sellerDetail.name} {sellerDetail.lastName}</th>
                      <th scope="row">{sellerDetail.email}</th>
                    </tr>
                  </tbody>
                </table>
                </span>
              </div>
              <div
                class="tab-pane fade show  bg-light m-3 rounded-3"
                id="nav-description"
                role="tabpanel"
                aria-labelledby="nav-description-tab"
              >
                <span class="card-text text-center p-3 h5 m-3 d-flex justify-content-center">
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
                    <tr class="table-dark">
                      <th scope="col">Name</th>
                      <th scope="col">State</th>
                      <th scope="col">Brand</th>
                      <th scope="col">Model</th>
                      <th scope="col">Category</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="table-light">
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
                          <div>{selectCategories(detailProduct.category)} </div>
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
                        No comments about this product
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
