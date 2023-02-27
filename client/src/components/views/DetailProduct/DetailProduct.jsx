import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailProduct,
  clearDetailProduct,
} from "../../../redux/thunks/productThunk";
import FavoriteButton from "../../Favorites/Favorites";
import StarRating from "../../StarRating/StarRating";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import "./DetailProduct.css";
import { addToCart } from "../../../redux/slices/cartSlice";
import AlertaCarrito from "../../alerts/AlertCarrito";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
    return () => {
      dispatch(clearDetailProduct());
    };
  }, [dispatch, id]);
  const formater = new Intl.NumberFormat("en");

  const addElementToCart = () => {
    detailProduct.stock > 0
      ? dispatch(addToCart(detailProduct))
      : window.alert("there is no product in stock");
  };
  /*   ///estado local para la calificacion
    const [value, setValue] = useState(detailProduct.score);
    // const value = ;
  
    //
    const promedio = (detailProduct.score + value) / 2;
    //
    /*const labels = {
      0.5: "Useless",
      1: "Useless+",
      1.5: "Poor",
      2: "Poor+",
      2.5: "Ok",
      3: "Ok+",
      3.5: "Good",
      4: "Good+",
      4.5: "Excellent",
      5: "Excellent+",
    }; */

  return (
    <div className="container-fluid p-4 contenedor-detalle">
      <div class="card center info">
        <div class="row g-10">
          <div class="col-5 col-sm-4 mb-1">
            <img
              src={detailProduct.img}
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
              <div class="">
                <a href="#" class="btn btn-success bi bi-handbag-fill m-3 ">
                  <span class="p-1" onClick={addElementToCart}>Buy product </span>
                </a>
                <a href="#" class="btn btn-primary bi bi-cart-plus-fill m-3">
                  <AlertaCarrito/>
                </a>
                <a href="#">
                  <FavoriteButton class="fa-regular fa-heart" />
                </a>
              </div>
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
                    <Rating
                      name="simple-controlled"
                      // value={value}
                      onChange={(event, newValue) => {
                        // setValue(newValue);
                      }}
                    />
                    <div>
                      <Typography component="legend">Puntuacion</Typography>
                      <Rating
                        name="read-only"
                        // value={value}
                        readOnly
                      />
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

export default DetailProduct;
