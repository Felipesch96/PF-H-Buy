import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../../../../../redux/thunks/productThunk";
import CarouselCard from "./CarouselCard";
import "./CarouselProducts.css";


// const CarouselProducts = () => {
//   // se le podria pasar los productos por params 
// const dispatch = useDispatch();

// const { products } = useSelector((state) => state.product);

//   const [pageCurrent, setPageCurrent] = useState(1);
//   const [cardsPerPage, setCardsPerPage] = useState(6);
//   const indexLastCard = pageCurrent * cardsPerPage;
//   const indexFirstCard = indexLastCard - cardsPerPage;
// const cardsCurrent = products?.slice(indexFirstCard, indexLastCard);

//   // const paginado = (page) => {
//   //   setPageCurrent(page);
//   // };
//   const selectNewImage = (index, images, next = true) => {
//     setTimeout(() => {
//       const condition = next
//         ? pageCurrent < 2
//         : pageCurrent > 1;
//       const nextIndex = next
//         ? condition
//           ? pageCurrent + 1
//           : 1
//         : condition
//           ? pageCurrent - 1
//           : 2;
//       setPageCurrent(products[nextIndex]);
//       setPageCurrent(nextIndex);
//     }, 500);
//   };

//   const previous = () => {
//     selectNewImage(pageCurrent, products, false);
//   };
//   const next = () => {
//     selectNewImage(pageCurrent, products);
//   };

//   useEffect(() => {
//     const reloj = setInterval(() => {
//       selectNewImage(pageCurrent, products);
//     }, 2500);
//     return () => clearInterval(reloj);
//   });

//   useEffect(() => {
//     dispatch(fetchProducts());
//     // dispatch(fetchCategories());
//   }, [dispatch]);

//   return (
//     <div className="d-grid gap-2 d-flex contenedor-products">

//       <button class="btn btn-primary box" type="button" onClick={previous}>{"<"}</button>
//       <div class="d-flex justify-content-center align-items-center">
//         {cardsCurrent.map((p) => {
//           return (
//             <div class="box">
//               <CarouselCard
//                 _id={p._id}
//                 img={p.img}
//                 name={p.name}
//                 score={p.score}
//               />
//             </div>
//           );
//         })}
//       </div>
//       <button class="btn btn-primary box" type="button" onClick={next}>{">"}</button>
//     </div>
//   )
// };

// export default CarouselProducts;
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarouselProducts = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const total = products?.slice(0, 10);


  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Reproduce el carrusel automáticamente
    autoplaySpeed: 3000
  }
  const [pageCurrent, setPageCurrent] = useState(1);
  const [cardsPerPage, setCardsPerPage] = useState(6);
  const indexLastCard = pageCurrent * cardsPerPage;
  const indexFirstCard = indexLastCard - cardsPerPage;
  const cardsCurrent = products?.slice(indexFirstCard, indexLastCard);

  // const paginado = (page) => {
  //   setPageCurrent(page);
  // };
  const selectNewImage = (next = true) => {
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
  }, [dispatch]);

  return (
    <div className="d-grid gap-3 d-flex contenedor-products">
      {/* <Slider {...settings}>
      {total.map((p) => { */}
      <button class="btn btn-primary box" type="button"
        onClick={previous}
      >{"<"}</button>
      <div class="d-flex justify-content-center align-items-center">
        {cardsCurrent.map((span) => {
          return (
            <div key={span._id} class="box">
              <CarouselCard
                _id={span._id}
                img={span.img}
                name={span.name}
                score={span.score}
              />
            </div>
          );
        })}
      </div>
      <button class="btn btn-primary box" type="button" onClick={next}>{">"}</button>
      {/* </Slider> */}
    </div>
  );
};

export default CarouselProducts;