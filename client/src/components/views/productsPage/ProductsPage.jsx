import React, { useEffect } from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";
import "./ProductsPage.css"

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product.filter);
  const products = useSelector((state) => state.product.products);
  const error = useSelector((state) => state.product.error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div class="container-fluid text-center pag-prods">
      <div class="row">
        <div class="col-9 col-md-3 filtros">
          <Filters />
        </div>
        <div class="col-12 col-sm-9">
          {error ? (
            <h2>{error}</h2>
          ) : filters.length ? (
            <Cards array={filters} />
          ) : (
            <Cards array={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
