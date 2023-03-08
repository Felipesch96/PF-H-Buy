import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { createFavorite } from "../../helpers/createFavorite";

function FavoriteButton({ productId }) {
  const {userLocal} = useSelector(state => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newFav, setNewFav] = useState();
  const [success, setSuccess] = useState(true);
  console.log(productId);
  console.log(userLocal._id);

  useEffect(() => {
    setNewFav({
      user_id: userLocal._id,
      product_id: productId
    });
  }, []);
  console.log(newFav);

  const handlerAddToFavorites = (e) => {
    e.preventDefault();
    createFavorite(newFav);


    // if (isFavorite !== true) {
    //   Swal.fire({
    //     color: "white",
    //     background: "#1299",
    //     icon: "success",
    //     title: "Producto agregado a favoritos.",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // }
    // else {
    //   Swal.fire({
    //     color: "white",
    //     background: "#1299",
    //     icon: "error",
    //     title: "Producto eliminado de favoritos.",
    //     showConfirmButton: false,
    //     timer: 1500,
    //   });
    // }
  }

  return (
    <form onSubmit={(e) => handlerAddToFavorites(e)}>
      <button
        type="submit"
        class={isFavorite ? "bi bi-heart-fill btn btn-primary" : "bi bi-heart btn btn-primary"}
      >
      </button>
    </form>
  );
}

export default FavoriteButton;