import React, { useState } from "react";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button onClick={() => setIsFavorite(!isFavorite)}  class={isFavorite ? "bi bi-heart-fill btn btn-primary" : "bi bi-heart btn btn-primary"}>
    </button>
  );
}

export default FavoriteButton;