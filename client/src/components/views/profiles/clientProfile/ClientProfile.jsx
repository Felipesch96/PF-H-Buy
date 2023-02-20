import React from "react";
import AccountInfo from "../accountInfo/AccountInfo";
import Wallet from "../paymentMethods/paymentMethodsTab/Wallet";


const ClientProfile = () => {


  return (
    <div>
      <div class="col-lg-8">
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
          <a class="nav-link" id="nav-account-tab" data-bs-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false">Account</a>
          <a class="nav-link" id="nav-payment-tab" data-bs-toggle="tab" href="#nav-payment" role="tab" aria-controls="nav-payment" aria-selected="false">Wallet</a>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="row">
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4"><span class="text-primary font-italic me-1">Purchases</span> (cantidad)
                    </p>
                    <p class="mb-1" style={{ fontSize: ".77rem;" }}>uno de estos por cada compra</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4"><span class="text-primary font-italic me-1">Favorites</span> (cantidad)
                    </p>
                    <p class="mb-1" style={{ fontSize: ".77rem;" }}>uno de estos por cada favorito</p>

                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4"><span class="text-primary font-italic me-1">Reclamos?</span> (cantidad)
                    </p>
                    <p class="mb-1" style={{ fontSize: ".77rem;" }}>uno de estos por cada reclamo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
            <AccountInfo />
            {/* la idea es que reciba los datos del usuario */}
          </div>
          <div class="tab-pane fade" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">
            <Wallet />
            {/* deberia recibir los datos del usuario */}
          </div>
        </div>
      </div>
    </div>
  )
};

export default ClientProfile;