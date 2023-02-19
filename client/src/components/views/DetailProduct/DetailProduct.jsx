import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../../redux/thunks";

const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div className="container">
      <div class="abs-center m-3">
        <div class="card center">
          <div class="row g-10">
            <div class="col-5 col-sm-4">
              <img
                src={detailProduct.img}
                class="img-fluid w-100"
                alt="card-horizontal-image"
              />
            </div>
            <div class="col-5">
              <div class="col-7 col-sm-8">
                <div class="card-body">
                  <h2 class="card-title">{detailProduct.name}</h2>
                  <p class="card-text">Stock : {detailProduct.stock}</p>
                  <p
                    class="card-text bg-success text-white rounded-2"
                    style={{
                      textAlign: "center",
                      display: "inline-block",
                      padding: "3px",
                    }}
                  >
                    ${detailProduct.price}
                  </p>
                  <p class="card-text ">
                    Category:
                    <span
                      class="border bg-primary text-white rounded"
                      style={{ padding: "2px" }}
                    >
                      {detailProduct.category}
                    </span>
                  </p>
                  <p class="card-text">Qualification: {detailProduct.score}☆</p>
                  <p class="card-text">
                    <small class="text-muted">Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
            <nav>
              <div class="nav nav-tabs" id="nav-tab" role="tablist">
                <button
                  class="nav-link active"
                  id="nav-home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-home"
                  type="button"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                >
                  Description
                </button>
                <button
                  class="nav-link"
                  id="nav-profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-profile"
                  type="button"
                  role="tab"
                  aria-controls="nav-profile"
                  aria-selected="false"
                >
                  Caracteristicas
                </button>
                <button
                  class="nav-link"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  type="button"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Reviews
                </button>
              </div>
            </nav>
            <div class="tab-content" id="nav-tabContent">
              <div
                class="tab-pane fade show active"
                id="nav-home"
                role="tabpanel"
                aria-labelledby="nav-home-tab"
              >
                <p class="card-text m-3">{detailProduct.description}</p>
              </div>
              <div
                class="tab-pane fade"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="nav-contact"
                role="tabpanel"
                aria-labelledby="nav-contact-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
