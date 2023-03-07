import React, { useEffect, useState } from "react";
import Cards from "../../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
} from "../../../redux/thunks/productThunk";
import "./ProductsPage.css";
import CardLoader from "../../CardLoader/CardLoader";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const { products, error } = useSelector((state) => state.product);

  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setLoader(true);
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    setLoader(false);
  }, [dispatch]);

  return (
    <div class="container-fluid text-center pag-prods">
      {error ? (
        <div class="p-5 w-50 d-inline-block">
          <div class="alert alert-danger" role="alert">
            <i
              class="bi bi-exclamation-triangle-fill"
              style={{ fontSize: "30px" }}
            />
            " {error}"
          </div>
        </div>
      ) : loader ? (
        <CardLoader />
      ) : (
        <Cards
          array={
            Array.isArray(products)
              ? products.filter((element) => element.isActive === true)
              : products
          }
        />
      )}
    </div>
  );
};

export default ProductsPage;
