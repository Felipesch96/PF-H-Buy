import React, { useState } from "react";
import Swal from "sweetalert2";

function FavoriteButton() {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <button onClick={() => {setIsFavorite(!isFavorite)
    if(isFavorite!==true){
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Producto agregado a favoritos.",
        showConfirmButton: false,
        timer: 1500,
      });}
      else{
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Producto eliminado de favoritos.",
          showConfirmButton: false,
          timer: 1500,
        });}
    }}  class={isFavorite ? "bi bi-heart-fill btn btn-primary" : "bi bi-heart btn btn-primary"}>
    </button>
  );
}

export default FavoriteButton;