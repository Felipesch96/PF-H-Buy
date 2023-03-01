import React, { useState } from "react";
import "./Paginate.css";

const Paginate = ({
  currentPage,
  setCurrentPage,
  cardsPerPage,
  input,
  setInput,
  array,
}) => {
  const pages = Math.ceil(
    Array.isArray(array) ? array.length / cardsPerPage : 1
  );
  // const [input, setInput] = useState(1);
  // const newArray = Array.isArray(array) ? array : 1;

  const nextPage = () => {
    setInput(parseInt(input) + 1);
    setCurrentPage(parseInt(currentPage) + 1);
  };

  const LastPage = () => {
    setInput(parseInt(input) - 1);
    setCurrentPage(parseInt(currentPage) - 1);
  };

  //vendria a ser el condicional para hababilitar o no el input
  const onKeyDown = (e) => {
    const value = e.target.value;

    //este numero de key vendria siendo la tecla enter enter
    if (e.keyCode === 13) {
      setCurrentPage(parseInt(value));
      if (
        //este es para verificar que el numero ingresado no sea menor a 1
        parseInt(value < 1) ||
        //este es para verificar que el numero ingresado no sea mayor al numero maximo de paginas
        parseInt(value) > Math.ceil(pages) ||
        //este para verificar que coloque solo numeros
        isNaN(parseInt(value))
        // || input.length > pages
      ) {
        //si se cumple setea en la primer pagina
        setCurrentPage(1);
        setInput(1);
      } else {
        setCurrentPage(parseInt(value));
      }
    }
  };

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <nav aria-label="Search results pages ">
      <ul class="pagination justify-content-center align-items-center">
        <li class="page-item ">
          <button
            class="btn btn-primary"
            aria-label="Previous"
            disabled={currentPage === 1 || currentPage < 1}
            onClick={LastPage}
          >
            <i class="bi bi-chevron-left"></i>
          </button>
        </li>
        <div>
          <input
            style={{ width: "40px" }}
            class="form-control "
            onChange={onChange}
            onKeyDown={(e) => onKeyDown(e)}
            value={input} // > pages ? 1 : input
            autoComplete="off"
          />
          {/* <span class="text">Page: {currentPage}</span> */}
        </div>
        <li>
          <span class="text">of {pages}</span>
        </li>
        <li class="page-item">
          <button
            class="btn  btn-primary"
            aria-label="Next"
            disabled={currentPage === pages || currentPage > pages}
            onClick={nextPage}
          >
            <i class="bi bi-chevron-right"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
