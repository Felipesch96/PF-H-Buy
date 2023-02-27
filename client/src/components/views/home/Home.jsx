import { useState, useEffect } from "react";
import CarouselProducts from "./carousels/products/CarouselProducts";
import CarouselProducts2 from "./carousels/products/CarouselProducts2";
import CarouselProducts3 from "./carousels/products/CarouselProducts3";
import CarouselBanner from "./carousels/banner/CarouselBanner";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { newGoogleUser } from "../../../redux/thunks/userThunk";

const Home = () => {
  const images = ["baner1.jpg", "baner2.jpg", "baner0.jpg"];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const dispatch = useDispatch();
  const { user } = useAuth0();
  const { userLocal } = useSelector((state) => state.user);

  useEffect(() => {
    verifyAuth();
    const reloj = setInterval(() => {
      selectNewImage(selectedIndex, images);
    }, 3000);
    return () => clearInterval(reloj);
  });

  function verifyAuth() {
    if (user) {
      if (!userLocal.email) {
        if (user.given_name) {
          const newUserAuth = {
            name: user.given_name,
            lastName: user.family_name,
            image: user.picture,
            email: user.email,
          };
          dispatch(newGoogleUser(newUserAuth));
        } else {
          const newUserAuth = {
            name: user.nickname,
            image: String(user.picture),
            email: user.email,
          };
          dispatch(newGoogleUser(newUserAuth));
        }
      }
    }
  }

  const selectNewImage = ( images, next = true) => {
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
      setSelectedIndex(nextIndex);
    }, 500);
  };

  return (
    <div className="home">
      <div className="carousel-banner">
        <a href="/products">
        <CarouselBanner />
        </a>
      </div>
      <hr />
      <br />
      <h1 className="text-center">Recomendados</h1>
      <div class="container-fluid carousel-productos">
        <CarouselProducts />
      </div>
      <hr />
      <h1 className="text-center">Segun tus ultimas busquedas</h1>
      <div class="container-fluid carousel-productos">
        <CarouselProducts2 />
      </div>
      <hr />
      <h1 className="text-center">Lo mas vendido</h1>
      <div class="container-fluid carousel-productos">
        <CarouselProducts3 />
      </div>
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