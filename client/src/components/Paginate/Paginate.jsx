import React from "react";

const Paginate = (props) => {
  const numbers = [];

  for (let i = 0; i < Math.ceil(props.products / props.cardsPerPage); i++) {
    numbers.push(i + 1);
  }

  // handler buttom prev y next
  const prev = (e) => {
    e.preventDefault();
    if (props.pageCurrent <= 1) {
      props.paginado(1);
    } else {
      props.paginado(props.pageCurrent - 1);
    }
  };
  const next = (e) => {
    e.preventDefault();
    if (props.products < 9) return;
    else {
      props.paginado(props.pageCurrent + 1);
    }
  };
  //

  return (
    <nav aria-label="Search results pages">
      <ul class="pagination justify-content-center">
        <button
          type="button"
          class="btn btn-outline-primary"
          style={{ marginRight: "1px" }}
          onClick={(e) => {
            prev(e);
          }}
          disabled={props.pageCurrent <= 1}
        >
          &laquo;
        </button>

        {numbers?.map((page) => {
          return (
            <li
              class="page-item"
              key={page}
              onClick={() => {
                props.paginado(page);
              }}
            >
              <div className={page === props.pageCurrent ? "active" : ""}>
                <a class="page-link" href="#">
                  {page}
                </a>
              </div>
            </li>
          );
        })}

        <button
          type="button"
          class="btn btn-outline-primary"
          style={{ marginLeft: "1px" }}
          onClick={(e) => {
            next(e);
          }}
          disabled={props.cardsCurrent < 9}
        >
          &raquo;
        </button>
      </ul>
    </nav>
  );
};

export default Paginate;
