import styled from "styled-components";
import { useState, useEffect } from "react";
import Carousel from "../home/Carousel";

const CarrouselImg = styled.img`
  width: 100%;
  height: 500px;
  opacity: 0;
  transition: 0.5s;
  &.loaded {
    opacity: 1;
  }
`;

const Home = () => {
  const images = ["baner1.jpg", "baner2.jpg", "baner0.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedImages, setSelectedImages] = useState(images[0]);
  const [loaded, setLoaded] = useState(false);

  const selectNewImage = (index, images, next = true) => {
    setLoaded(false);
    setTimeout(() => {
      const condition = next
        ? selectedIndex < images.length - 1
        : selectedIndex > 0;
      const nextIndex = next
        ? condition
          ? selectedIndex + 1
          : 0
        : condition
        ? selectedIndex - 1
        : images.length - 1;
      setSelectedImages(images[nextIndex]);
      setSelectedIndex(nextIndex);
    }, 500);
  };

  useEffect(() => {
    const reloj = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(reloj);
  });

  return (
    <div>
      <a href="/products">
        <CarrouselImg
          src={require(`../LandingPage/media/baner1.jpg`)}
          alt="no funciona"
          className={loaded ? "loaded" : ""}
          onLoad={() => setLoaded(true)}
        />
      </a>
      <br />
      <h1 className="text-center">Recomendados</h1>
      <Carousel />
      <hr />
      <div className="text-center">
        <h1>¿Quieres ver mas productos?</h1>
        <a href="/products">
          <button className="btn btn-secondary">Click aquí</button>
          <hr />
        </a>
      </div>
    </div>
  );
};

export default Home;
