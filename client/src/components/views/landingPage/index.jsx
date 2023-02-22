import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../redux/thunks/productThunk";
import styles from "./landingPage.module.css";

const LandingPage = () => {

  const dispatch = useDispatch();
  const productos = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <div className="text-center">
      <div className={styles.landing}>
        <br /><br /> <br /><br /> <br /><br /> <br /><br /> <br /><br />
        <h1 style={{ marginLeft: "110px", fontSize: "60px" }}>H-BUY</h1>
        <h1 style={{ marginLeft: "60px" }}>
          <br />
          Todo lo que buscas <br />
          en un solo lugar.
        </h1>
        <br /><br /> <br /><br />{" "}
        <a href="/home" style={{ marginLeft: "970px" }}>
          <button
            className="btn btn-outline-success"
            style={{ fontSize: "50px" }}
          >
            Ingresar
          </button>
        </a>
        <br /> <br />
        <br /> <br />
        <br />
      </div>
    </div>
  );
};

export default LandingPage;
