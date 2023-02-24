import React, { useState } from "react";
import { ProductModal } from "../../../modals/product";
import CreateProductFrom from "../../../modals/product/CreateProductForm";
import AccountInfo from "../accountInfo/AccountInfo";
import Wallet from "../paymentMethods/paymentMethodsTab/Wallet";
import "./SellerProfile.css";


const SellerProfile = () => {

  const [productModal, setProductModal] = useState(false);

  return (
    <div class="container-fluid seller-profile">
      <div class="col-lg-8">
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
          <a class="nav-link" id="nav-account-tab" data-bs-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false">Account</a>
          <a class="nav-link" id="nav-payment-tab" data-bs-toggle="tab" href="#nav-payment" role="tab" aria-controls="nav-payment" aria-selected="false">Wallet</a>
          <a class="nav-link crear-prod" id="nav-create-product-tab" data-bs-toggle="tab" href="#nav-create-product" role="tab" aria-controls="nav-create-product" aria-selected="false" onClick={() => {setProductModal(true);}}>
              Create Product
          </a>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="column">
              {/* <div class="col-md-6"> */}
                <div class="card mb-4 mt-4 seller-button">
                  <div class="card-body">
                    <span class="text-primary font-italic me-1">
                      <div class="btn-group dropend">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Sales (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Sale 1</a></li>
                          <li><a class="dropdown-item" href="#">Sale 2</a></li>
                          <li><a class="dropdown-item" href="#">Sale 3</a></li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              {/* </div> */}
              {/* <div class="col-md-6"> */}
                <div class="card mb- mt-4 seller-button">
                  <div class="card-body">
                    <span class="text-primary font-italic me-1">
                      <div class="btn-group dropend">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Claims (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Claim 1</a></li>
                          <li><a class="dropdown-item" href="#">Claim 2</a></li>
                          <li><a class="dropdown-item" href="#">Claim 3</a></li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              {/* </div> */}
              {/* <div class="col-md-6"> */}
                <div class="card mb-4 mt-4 seller-button">
                  <div class="card-body">
                    <span class="text-primary font-italic me-1">
                      <div class="btn-group dropend">
                        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Questions (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <li><a class="dropdown-item" href="#">Question 1</a></li>
                          <li><a class="dropdown-item" href="#">Question 2</a></li>
                          <li><a class="dropdown-item" href="#">Question 3</a></li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              {/* </div> */}
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
          <div class="tab-pane fade" id="nav-create-product" role="tabpanel" aria-labelledby="nav-create-product-tab">
          {productModal && <ProductModal onClose={setProductModal} />}
          </div>
        </div>
      </div>
    </div>
  )
};

export default SellerProfile;
