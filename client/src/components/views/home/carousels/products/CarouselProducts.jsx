import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../../../../redux/thunks/productThunk";
import ViewProductButton from "../../../../buttons/ViewPoroduct/ViewProductButton";
import Card from "../../../../Card/Card";
import CarouselCard from "./CarouselCard";
import "./CarouselProducts.css";


const CarouselProducts = () => {
  // se le podria pasar los productos por params 
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);

  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = products?.slice(indexFirstCard, indexLastCard);

  // const paginado = (page) => {
  //   setPageCurrent(page);
  // };
  const selectNewImage = (index, images, next = true) => {
    setTimeout(() => {
      const condition = next
        ? pageCurrent < 2
        : pageCurrent > 1;
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
  }, [dispatch, JSON.stringify(products)]);

  return (
    <div className="d-grid gap-3 d-flex contenedor-products">

      <button class="btn btn-primary box" type="button" onClick={previous}>Preview</button>
      {cardsCurrent.map((p) => {
        return (
          <div class="box">
            <CarouselCard
              _id={p._id}
              img={p.img}
              name={p.name}
              score={p.score}
            />
          </div>
        );
      })}

      <button class="btn btn-primary box" type="button" onClick={next}>Next</button>
    </div>
  )
};

export default CarouselProducts;