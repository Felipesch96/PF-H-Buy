import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { createFavorite } from "../../helpers/createFavorite";

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
