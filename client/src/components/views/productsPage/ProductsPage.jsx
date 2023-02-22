import React, { useEffect } from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product.filter);
  const productos = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div>
      <section class="productsPage">
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-12 col-md-3 ">
              <Filters />
            </div>
            <div class="col">
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
      </section>
    </div>
  );
};

export default ProductsPage;
