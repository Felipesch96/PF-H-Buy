import React from "react";

const PaymentMethod = ({ card, type, number, name, expDate }) => {

  return (
    <div class="col-md-6">
      <div class="card mb-4 mb-md-0">
        <div class="card-body">
          <span
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
          </span>
          <span class="mt-4 mb-1" style={{ fontSize: ".77rem" }}>
            {
              `Number: ${number}`
            }
          </span>
          <span
            class="mt-4 mb-1"
            style={{ fontSize: ".77rem" }}
          >
            {
              `Name (sam as card): ${name}`
            }
          </span>
          <span
            class="mt-4 mb-1"
            style={{ fontSize: ".77rem" }}
          >
            {
              `Exp. date: ${expDate}`
            }
          </span>
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

export default PaymentMethod;