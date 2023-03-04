import React, { useEffect } from "react";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";
import "./ProductsPage.css";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div class="container-fluid text-center pag-prods">
      {error ? (
        <div class="mt-5">
          <div class="alert alert-danger" role="alert">
            <i
              class="bi bi-exclamation-triangle-fill"
              style={{ fontSize: "30px" }}
            />
            " {error}"
          </div>
        </div>
      ) : (
        <Cards
          array={products.filter((element) => element.isActive === true)}
        />
      )}
    </div>
  );
};

export default ProductsPage;
