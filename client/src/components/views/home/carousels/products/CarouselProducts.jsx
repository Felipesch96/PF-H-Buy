import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../../../../../redux/thunks/productThunk";
import CarouselCard from "./CarouselCard";
import "./CarouselProducts.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage] = useState(6);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = products?.slice(indexFirstCard, indexLastCard);

  // const paginado = (page) => {
  //   setPageCurrent(page);
  // };
  const selectNewImage = (next = true) => {
    setTimeout(() => {
      const condition = next ? pageCurrent < 2 : pageCurrent > 1;
      const nextIndex = next
        ? condition
          ? pageCurrent + 1
          : 1
        : condition
          ? pageCurrent - 1
          : 2;
      setPageCurrent(products[nextIndex]);
      setPageCurrent(nextIndex);
    }, 500);
  };

  const previous = () => {
    selectNewImage(pageCurrent, products, false);
  };
  const next = () => {
    selectNewImage(pageCurrent, products);
  };

  useEffect(() => {
    const reloj = setInterval(() => {
      selectNewImage(pageCurrent, products);
    }, 2500);
    return () => clearInterval(reloj);
  });

  useEffect(() => {
    dispatch(fetchProducts());
    // dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className="d-grid gap-3 d-flex contenedor-products">
      {/* <Slider {...settings}>
      {total.map((p) => { */}
      <button class="btn btn-primary box" type="button" onClick={previous}>
        {"<"}
      </button>
      {/* <div class="container"> */}
      <div className="fila-products">
        {/* <div class="row"> */}

        {cardsCurrent.map((span) => {
          return (
            <div key={span._id} class="col">
              <CarouselCard
                _id={span._id}
                img={span.img}
                name={span.name}
                score={span.score}
              />
            </div>
          );
        })}
      </div>
      {/* </div> */}
      <button class="btn btn-primary box" type="button" onClick={next}>
        {">"}
      </button>
      {/* </Slider> */}
    </div>
  );
};

export default CarouselProducts;
