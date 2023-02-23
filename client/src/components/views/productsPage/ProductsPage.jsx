import React, { useEffect } from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product.filter);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div class="container-fluid text-center">
      <div class="row">
        <div class="col-9 col-md-3">
          <Filters />
        </div>
        <div class="col-12 col-sm-9">
          {error ? (
            <h2>{error}</h2>
          ) : filters.length ? (
            <div class="col">
              <Cards />
            </div>
          ) : (
            <Cards />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
