import React from "react";
import { useState,useEffect } from "react";
import Card from "../../Card/Card";


const Carousel = () => {
  const products = [
    {
      id: 1,
      img: "https://media.flixcar.com/f360cdn/Samsung-106630345-latin-galaxy-a13-sm-a135-sm-a135mzkntpa-532118312--Download-Source--zoom.png",
      name: "Samsum A13",
      price: 32224,
      calification: 3.4,
      categories: "Celulares",
    },
    {
      id: 2,
      img: "https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg",
      name: "Playstation 4",
      price: 300000,
      calification: 4.4,
      categories: "Juegos",
    },
    {
      id: 3,
      img: "https://castillo.com.ar/Image/0/500_500-11254020-1.png",
      name: "Pileta",
      price: 20000,
      calification: 2.4,
      categories: "Muebles",
    },
    {
      id: 12,
      img: "https://mla-s1-p.mlstatic.com/777167-MLA46258832185_062021-F.jpg",
      name: "Pc Gamer",
      price: 149.092,
      calification: 4.4,
      categories: "Computers",
    },
    {
      id: 11,
      img: "https://media.flixcar.com/f360cdn/Samsung-106630345-latin-galaxy-a13-sm-a135-sm-a135mzkntpa-532118312--Download-Source--zoom.png",
      name: "Samsum A13",
      price: 32.4,
      calification: 3.4,
      categories: "Celulares",
    },
    {
      id: 25,
      img: "https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg",
      name: "Playstation 4",
      price: 300000,
      calification: 4.4,
      categories: "Juegos",
    },
    {
      id: 3,
      img: "https://castillo.com.ar/Image/0/500_500-11254020-1.png",
      name: "Pileta",
      price: 20000,
      calification: 2.4,
      categories: "Muebles",
    },
    {
      id: 8,
      img: "https://mla-s1-p.mlstatic.com/777167-MLA46258832185_062021-F.jpg",
      name: "Pc Gamer",
      price: 149.092,
      calification: 4.4,
      categories: "Computers",
    },
    {
      id: 134,
      img: "https://media.flixcar.com/f360cdn/Samsung-106630345-latin-galaxy-a13-sm-a135-sm-a135mzkntpa-532118312--Download-Source--zoom.png",
      name: "Samsum A13",
      price: 32.4,
      calification: 3.4,
      categories: "Celulares",
    },
    {
      id: 21,
      img: "https://www.necxus.com.ar/products_image/12720/1000x1000_1.jpg",
      name: "Playstation 4",
      price: 300000,
      calification: 4.4,
      categories: "Juegos",
    },
    {
      id: 32,
      img: "https://castillo.com.ar/Image/0/500_500-11254020-1.png",
      name: "Pileta",
      price: 20000,
      calification: 2.4,
      categories: "Muebles",
    },
    {
      id: 122,
      img: "https://mla-s1-p.mlstatic.com/777167-MLA46258832185_062021-F.jpg",
      name: "Pc Gamer",
      price: 149.092,
      calification: 4.4,
      categories: "Computers",
    },
  ];

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

  return (
    <div className="d-grid gap-3 d-flex">
  <button class="btn btn-primary " type="button" onClick={previous}>Preview</button>
      <div class="row gx-0">
        {cardsCurrent.map((p) => {
          return (
            <div class="col">
              <Card
                key={p.id}
                id={p.id}
                img={p.img}
                name={p.name}
                price={p.price}
                calification={p.calification}
                categories={p.categories}
              />
            </div>
          );
        })}
      </div>
  <button class="btn btn-primary " type="button" onClick={next}>Next</button>
    </div>
  )
};

export default Carousel;