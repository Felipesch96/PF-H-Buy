import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../../redux/thunks/productThunk";
import carrito from "./img/carritoDetail.jpg";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);
  const formater = new Intl.NumberFormat("en");

  //     style: "currency",
  //     currency: "ARS",
  //
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
                    ${formater.format(detailProduct.price)}
                  </h4>
                  <p class="card-text">Qualification: {detailProduct.score}☆</p>
                  <p class="card-text">
                    <span class="text-muted">Last updated 3 mins ago</span>
                  </p>
                </div>
                <div class="">
                  <a href="#" class="btn btn-success m-3" aria-current="page">
                    Buy product
                  </a>
                  <a href="#" class="btn btn-primary m-3">
                    Add to cart{" "}
                    <img
                      src={carrito}
                      class="rounded"
                      style={{ height: "25px", width: "25px" }}
                    />
                  </a>
                </div>
              </div>
            </div>

            <nav class="mt-3">
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
                <p class="card-text m-3">{detailProduct.description}</p>
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
                      <th scope="col">Category</th>
                      <th scope="col">Model</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">{detailProduct.name}</td>
                      <td scope="row">{detailProduct.brand}</td>
                      <td scope="row">{detailProduct.category}</td>
                      <td scope="row">...</td>
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
                Criticas al producto ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
