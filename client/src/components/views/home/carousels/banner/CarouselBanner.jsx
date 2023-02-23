import React, { useState } from "react";
import styled from "styled-components";
import "./CarouselBanner.css";

const CarrouselImg = styled.img`
  width: 100%;
  height: 500px;
  opacity: 0;
  transition: 0.5s;
  &.loaded {
    opacity: 1;
  }
`;
const CarouselBanner = () => {
  const images = ["baner1.jpg", "baner2.jpg", "baner0.jpg"];

  // const [loaded, setLoaded] = useState(false);
  // const [selectedImages, setSelectedImages] = useState(images[0]);

  return (
    <div id="carouselExampleAutoplaying" class="carousel slide contenedor" data-bs-ride="carousel"
    >
      <div class="carousel-inner tamano">
        {/* {
          images?.map(i => {
            return (
              <div class="carousel-item active contenedor-imagen">
                <img src={require(`../media/${i}`)} class="img-fluid imagen" alt="img-fluid"
                ></img>
              </div>
            )
          })
        } */}
        <div class="carousel-item active">
          <img src={require(`../media/baner0.jpg`)} class="d-block w-100 contenedor-imagen" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={require(`../media/baner1.jpg`)} class="d-block w-100 contenedor-imagen" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src={require(`../media/baner2.jpg`)} class="d-block w-100 contenedor-imagen" alt="..."/>
        </div>
        <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
          <span className="prev-next" ><b>Previous</b></span>
        </button>
        <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="cambio-carousel" ><b>Next</b></span>
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </div>
  )
};

export default CarouselBanner;