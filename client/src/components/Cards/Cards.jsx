import React, { useEffect } from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginate from "../Paginate/Paginate";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../redux/thunks";
import { Link } from "react-router-dom";

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
              <Link to={`/products/${p.id}`}>
                <Card
                  key={p.id}
                  id={p.id}
                  img={p.img}
                  name={p.name}
                  price={p.price}
                  score={p.score}
                  category={p.category}
                />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
