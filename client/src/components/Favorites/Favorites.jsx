import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createFavorite } from "../../helpers/createFavorite";
import Swal from "sweetalert2";

function FavoriteButton({ productId }) {
  const { userLocal } = useSelector((state) => state.user);
  const [isFavorite, setIsFavorite] = useState(false);
  const [newFav, setNewFav] = useState();

  useEffect(() => {
    setNewFav({
      user_id: userLocal._id,
      product_id: productId,
    });
  }, []);

  const handlerAddToFavorites = (e) => {
    e.preventDefault();
    createFavorite(newFav);
    Swal.fire({
      color: "white",
      background: "#1299",
      icon: "success",
      title: "Product added to favorites.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <form onSubmit={(e) => handlerAddToFavorites(e)}>
      <button
        type="submit"
        class={
          isFavorite
            ? "bi bi-heart-fill btn btn-primary"
            : "bi bi-heart btn btn-primary"
        }
      ></button>
    </form>
  );
}

export default FavoriteButton;
