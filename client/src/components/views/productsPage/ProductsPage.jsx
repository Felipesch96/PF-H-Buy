import React, { useEffect } from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";
import "./ProductsPage.css"

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product.filter);
  const productos = useSelector((state) => state.product.products);

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
          {filters.length ? (
            <div class="col">
              <Cards array={filters} />
            </div>
          ) : (
            <Cards array={productos} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
