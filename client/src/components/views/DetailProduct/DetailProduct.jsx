import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct, clearDetailProduct } from "../../../redux/thunks";
import carrito from "./img/carritoDetail.jpg";

import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

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

  //   style: "currency",
  //   currency: "ARS",
  const calification = (item) => {
    e.prevenDefault();
    var cont;
    cont = item.id[0];
    let nombre = item.id.substring(1);
    for (let i = 0; i < 5; i++) {
      if (i < cont) {
        document.getElementById(i + 1 + nombre).style.color = "orange";
      } else {
        document.getElementById(i + 1 + nombre).style.color = "black";
      }
    }
  };
  return (
    <div className="container">
      <div class="abs-center m-4">
        <div class="card center ">
          <div class="row g-10">
            <div class="col-5 col-sm-4">
              <img
                src={detailProduct.img}
                class="img-fluid w-100 m-2"
                alt="card-horizontal-image"
              />
            </div>
            <div class="col">
              <div class="col-7 col-sm-8">
                <div class="card-body">
                  <h2 class="card-title">{detailProduct.name}</h2>
                  <p class="card-text">Stock : {detailProduct.stock}</p>
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
                  <div class="container">
                    <p class="card-text mb-1">
                      Qualification: {detailProduct.score} ☆
                    </p>

                    <Rating
                      name="half-rating-read"
                      defaultValue={detailProduct.score}
                      precision={0.5}
                      readOnly
                    />
                  </div>
                  <p class="card-text">
                    <span class="text-muted">Last updated 3 mins ago</span>
                  </p>
                </div>
                <div class="">
                  <a href="#" class="btn btn-success bi bi-handbag-fill m-3 ">
                    <span class="p-1">Buy product </span>
                  </a>
                  <a href="#" class="btn btn-primary bi bi-cart-plus-fill m-3">
                    <span class="p-1">Add to Cart </span>
                  </a>
                </div>
              </div>
            </div>

            <nav class="mt-3 nav justify-content-center">
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
                <p class="card-text text-center m-3">
                  {detailProduct.description}
                </p>
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
                      <td scope="row">{detailProduct.name}</td>

                      <td scope="row">
                        {detailProduct.brand ? (
                          detailProduct.brand
                        ) : (
                          <span class="text-danger">not specified</span>
                        )}
                      </td>
                      <td scope="row">
                        {detailProduct.model ? (
                          detailProduct.model
                        ) : (
                          <span class="text-danger">not specified</span>
                        )}
                      </td>
                      <td scope="row">
                        {detailProduct.category ? (
                          detailProduct.category
                        ) : (
                          <span class="text-danger">not specified</span>
                        )}
                      </td>
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
                <p class="card-text text-center m-3">
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
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                      />
                      <div>
                        <Typography component="legend">Puntuacion</Typography>
                        <Rating name="read-only" value={value} readOnly />
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
    </div>
  );
};

export default DetailProduct;
