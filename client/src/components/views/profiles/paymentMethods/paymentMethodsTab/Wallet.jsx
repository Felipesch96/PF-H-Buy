import React from "react";
import NewPaymentMethod from "../newPaymentMethod/NewPaymentMethod";
import PaymentMethod from "../paymentMethod/Cards";

const Wallet = () => {
  // un map por de metodos de pago

  const wallet = {
    card: "Visa",
    type: "credit",
    number: "**** **** **** 1234",
    securityCode: "****",
    name: "pepito pindonga",
    expDate: "00/00",
  };

  return (
    <div class="container payments">
      <div class="row">
        <div>
          <PaymentMethod
            card={wallet.card}
            type={wallet.type}
            number={wallet.number}
            name={wallet.name}
            expDate={wallet.expDate}
          />
        </div>

        <div>
          <NewPaymentMethod />
        </div>
      </div>
    </div>
  );
};

export default Wallet;
