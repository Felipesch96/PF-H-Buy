import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { fetchProducts } from "../../redux/thunks/productThunk";

const Cards = () => {
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.product.products);
  console.log(productos);

  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = productos?.slice(indexFirstCard, indexLastCard);

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
          cardsCurrent={cardsCurrent.length}
        />
      </div>
      <div class="row g-3 row-cols-3">
        {cardsCurrent.map((p) => {
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
                <div class="card-body text-center-body">
                  <Link to={`/products/${p._id}`}>
                    <a
                      class="btn btn-outline-primary btn-sm"
                      href="#"
                      data-abc="true"
                    >
                      View Product
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
