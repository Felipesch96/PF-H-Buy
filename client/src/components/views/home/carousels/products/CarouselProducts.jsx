import React from "react";
import CarouselCard from "./CarouselCard";
import "./CarouselProducts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselProducts = ({ array }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: array.length < 5 ? array.length : 4,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {array.map((p) => {
          return (
            <div key={p._id} class="box">
              <CarouselCard
                _id={p._id}
                img={p.img_url}
                name={p.name}
                score={p.score}
                price={p.price}
              />
            </div>
          );
        })}
      </Slider>
      <br />
    </div>
  );
};

export default CarouselProducts;
