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
            <div class="column">
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        <div class="btn-group dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Purchases
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Purchase 1</a></li>
                            <li><a class="dropdown-item" href="#">Purchase 2</a></li>
                            <li><a class="dropdown-item" href="#">Purchase 3</a></li>
                          </ul>
                        </div>
                                                
                      </span>
                      (cant) 
                    </p>
                    
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        <div class="btn-group dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Favorites
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Fav 1</a></li>
                            <li><a class="dropdown-item" href="#">Fav 2</a></li>
                            <li><a class="dropdown-item" href="#">Fav 3</a></li>
                          </ul>
                        </div>
                      </span> (cant)
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        <div class="btn-group dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Inquiries made
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Product 1</a></li>
                            <li><a class="dropdown-item" href="#">Product 2</a></li>
                            <li><a class="dropdown-item" href="#">Product 3</a></li>
                          </ul>
                        </div>
                      </span> (cant)
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mb-md-0">
                  <div class="card-body">
                    <p class="mb-4">
                      <span class="text-primary font-italic me-1">
                        <div class="btn-group dropend">
                          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Claims
                          </button>
                          <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Claim 1</a></li>
                            <li><a class="dropdown-item" href="#">Claim 2</a></li>
                            <li><a class="dropdown-item" href="#">Claim 3</a></li>
                          </ul>
                        </div>
                      </span> (cant)
                    </p>
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