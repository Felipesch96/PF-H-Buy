import React, { useState } from "react";
import NewPaymentMethod from "../newPaymentMethod/NewPaymentMethod";
import PaymentMethod from "../paymentMethod/Cards";


const Wallet = () => {

  // un map por de metodos de pago

  const [wallet, setWallet] = useState([
    {
      card: "Visa",
      type: "credit",
      number: "**** **** **** 1234",
      securityCode: "****",
      name: "pepito pindonga",
      expDate: "00/00"
    }
  ]);

  return (
    <div class="container payments">
      <div class="row">
        <div>
          {
            wallet?.map(pm => {
              return (
                <PaymentMethod card={pm.card} type={pm.type} number={pm.number} name={pm.name} expDate={pm.expDate} />
              )
            })
          }
        </div>

        <div>
          <NewPaymentMethod />
        </div>
      </div>
    </div>
  )
};

export default Wallet;