import React from "react";

const Paginate = (props) => {
  const numbers = [];

  for (let i = 0; i < Math.ceil(props.products / props.cardsPerPage); i++) {
    numbers.push(i + 1);
  }

  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item disabled">
          <span class="page-link">Previous</span>
        </li>
        {numbers?.map((page) => {
          return (
            <li
              class="page-item"
              key={page}
              onClick={() => {
                props.paginado(page);
              }}
            >
              <a class="page-link" href="#">
                {page}
              </a>
            </li>
          );
        })}
        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Paginate;
