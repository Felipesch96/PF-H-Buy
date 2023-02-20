import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailProduct } from "../../../redux/thunks/productThunk";


const DetailProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
  }, [dispatch, id]);
  return (
    <div className="container m-3">
      <div class="card">
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
                <p class="card-text">{detailProduct.description}</p>
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
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
