import React, { useState } from "react";
import NewPaymentMethod from "../newPaymentMethod/NewPaymentMethod";
import PaymentMethod from "../paymentMethod/PaymentMethod";
import "./paymentMethodsTab.css";

const PaymentMethodsTab = () => {

  // un map por de metodos de pago

  const [paymentMethods, setPaymentMethods] = useState([
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
            paymentMethods?.map(pm => {
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

export default PaymentMethodsTab;