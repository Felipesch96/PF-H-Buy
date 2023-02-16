import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
import Paginate from "../Paginate/Paginate";

const Cards = () => {
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
      name: "Pc Gamer Amd Ryzen 5 Pro 3350 16gb 240gb Ssd 1tb Hdd Wifi Bt",
      price: 149.092,
      calification: 4.4,
      categories: "Computadoras",
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
      name: "Pc Gamer Amd Ryzen 5 Pro 3350 16gb 240gb Ssd 1tb Hdd Wifi Bt",
      price: 149.092,
      calification: 4.4,
      categories: "Computadoras",
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
      name: "Pc Gamer Amd Ryzen 5 Pro 3350 16gb 240gb Ssd 1tb Hdd Wifi Bt",
      price: 149.092,
      calification: 4.4,
      categories: "Computadoras",
    },
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
      name: "Pc Gamer Amd Ryzen 5 Pro 3350 16gb 240gb Ssd 1tb Hdd Wifi Bt",
      price: 149.092,
      calification: 4.4,
      categories: "Computadoras",
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
      name: "Pc Gamer Amd Ryzen 5 Pro 3350 16gb 240gb Ssd 1tb Hdd Wifi Bt",
      price: 149.092,
      calification: 4.4,
      categories: "Computadoras",
    },
  ];

  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(9);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = products?.slice(indexFirstCard, indexLastCard);

  const paginado = (page) => {
    setPageCurrent(page);
  };

  return (
    <div class="container">
      <Paginate
        paginado={paginado}
        products={products.length}
        cardsPerPage={cardsPerPage}
        pageCurrent={pageCurrent}
      />
      <div class="row g-3 row-cols-3">
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
    </div>
  );
};

export default Cards;
