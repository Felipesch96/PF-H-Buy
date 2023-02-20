import React from "react";

const Cards = ({ card, type, number, name, expDate }) => {

  return (
    <div class="col-md-6">
      <div class="card mb-4 mb-md-0">
        <div class="card-body">
          <p
            class="mb-4"
          >
            <a
              href="https://www.visa.com.ar/"
              class="text-primary font-italic me-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              {
                `Tarjeta ${card}`
              }
            </a> {type}
          </p>
          <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>
            {
              `Number: ${number}`
            }
          </p>
          <p
            class="mt-4 mb-1"
            style={{ fontSize: ".77rem;" }}
          >
            {
              `Name (sam as card): ${name}`
            }
          </p>
          <p
            class="mt-4 mb-1"
            style={{ fontSize: ".77rem;" }}
          >
            {
              `Exp. date: ${expDate}`
            }
          </p>
        </div>
        <button>
          edit
        </button>
        <button>
          delete
        </button>
      </div>
    </div>
  )
};

export default Cards;