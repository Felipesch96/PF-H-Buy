import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/thunks/productThunk";
import ViewProductButton from "../buttons/ViewPoroduct/ViewProductButton";

const Cards = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.product.filter);
  const productos = useSelector((state) => state.product.products);

  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const productsCurrent = productos?.slice(indexFirstCard, indexLastCard);
  const filterCurrent = filters?.slice(indexFirstCard, indexLastCard);

  const paginado = (page) => {
    setPageCurrent(page);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div class="container">
      <div>
        <Paginate
          paginado={paginado}
          products={productos.length}
          cardsPerPage={cardsPerPage}
          pageCurrent={pageCurrent}
          cardsCurrent={productsCurrent.length || filterCurrent}
        />
      </div>
      <div class="row g-3 row-cols-3">
        {filters.length
          ? filterCurrent.map((p) => {
            return (
              <div class="col">
                <div class="card mb-3">
                  <Card
                    key={p._id}
                    img={p.img}
                    name={p.name}
                    price={p.price}
                    score={p.score}
                    category={p.category}
                  />
                  <ViewProductButton _id={p._id} />
                </div>
              </div>
            );
          })
          : productsCurrent.map((p) => {
            return (
              <div class="col">
                <div class="card mb-3">
                  <Card
                    key={p._id}
                    img={p.img}
                    name={p.name}
                    price={p.price}
                    score={p.score}
                    category={p.category}
                  />
                  <ViewProductButton _id={p._id} />
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
