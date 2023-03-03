import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { useLocalStorage } from "../../../customHooks/UseLocalStore";
import { addToCart } from "../../../redux/slices/cartSlice";
import FavoriteButton from "../../Favorites/Favorites";
import StarRating from "../../StarRating/StarRating";
import "./DetailProduct.css";

const DetailCard = () => {
  const dispatch = useDispatch();
  const [history, setHistory] = useLocalStorage("history", []);
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const cart = useSelector((state) => state.cart.cartList);
  const thisProduct = cart.find((element) => element._id === detailProduct._id);
  const verifyHistory = history.filter(
    (Element) => Element._id === detailProduct._id
  );
  const formater = new Intl.NumberFormat("en");
  useEffect(() => {
    if (!verifyHistory.length) {
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
          background: "#1299",
          icon: "success",
          title: "Producto agregado al carrito.",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(addToCart(detailProduct));
      } else {
        window.alert("No more products available");
      }
    } else {
      if (detailProduct.stock > 0) {
        dispatch(addToCart(detailProduct));
        Swal.fire({
          color: "white",
          background: "#1299",
          icon: "success",
          title: "Producto agregado al carrito.",
          showConfirmButton: false,
          timer: 1500,
        });
        dispatch(addToCart(detailProduct));
      } else {
        window.alert("Not in stock");
      }
    }
  };

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
                <p class="card-text mb-1">
                  Qualification: {detailProduct.score} ☆
                </p>
                <div class="container">
                  <StarRating score={detailProduct.score} />
                </div>
                <p class="card-text">
                  <span class="text-muted">Last updated 3 mins ago</span>
                </p>
              </div>
              <button
                class="p-1 btn btn-success bi bi-handbag-fill m-3"
                onClick={addElementToCart}
              >
                Buy product{" "}
              </button>

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
                id="nav-home-tab"
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
                id="nav-profile-tab"
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
                id="nav-contact-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-review"
                type="button"
                role="tab"
                aria-controls="nav-review"
                aria-selected="false"
              >
                Reviews
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
                    <th scope="col">Brand</th>
                    <th scope="col">Model</th>
                    <th scope="col">Category</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">{detailProduct.name}</th>
                    <th scope="row">
                      {detailProduct.brand ? (
                        detailProduct.brand
                      ) : (
                        <span class="text-danger">not specified</span>
                      )}
                    </th>
                    <th scope="row">
                      {detailProduct.model ? (
                        detailProduct.model
                      ) : (
                        <span class="text-danger">not specified</span>
                      )}
                    </th>
                    <th scope="row">
                      {detailProduct.category ? (
                        detailProduct.category
                      ) : (
                        <span class="text-danger">not specified</span>
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
              <p class="card-text text-center m-3 ">
                <div class="container">
                  <Box
                    sx={{
                      "& > legend": { mt: 2 },
                    }}
                  >
                    <Typography component="legend">
                      Califica el Producto:
                    </Typography>
                    <Rating name="simple-controlled" />
                    <div>
                      <Typography component="legend">Puntuacion</Typography>
                      <Rating name="read-only" readOnly />
                    </div>
                  </Box>
                  <Button variant="contained">Send</Button>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
