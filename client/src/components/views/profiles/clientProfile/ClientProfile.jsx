import React from "react";
import AccountInfo from "../accountInfo/AccountInfo";
import PaymentMethodsTab from "../paymentMethods/paymentMethodsTab/PaymentMethodsTab";


const ClientProfile = () => {


  return (
    <div>
      <div class="col-lg-8">
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
          <a class="nav-link" id="nav-account-tab" data-bs-toggle="tab" href="#nav-account" role="tab" aria-controls="nav-account" aria-selected="false">Account</a>
          <a class="nav-link" id="nav-payment-tab" data-bs-toggle="tab" href="#nav-payment" role="tab" aria-controls="nav-payment" aria-selected="false">Payment methods</a>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempore tempora molestiae pariatur, voluptate fuga corrupti est reiciendis maxime totam dolores, voluptates, dolorem eaque sequi.</div>
          <div class="tab-pane fade" id="nav-account" role="tabpanel" aria-labelledby="nav-account-tab">
            <AccountInfo />
            {/* la idea es que reciba los datos del usuario */}
          </div>
          <div class="tab-pane fade" id="nav-payment" role="tabpanel" aria-labelledby="nav-payment-tab">
          <PaymentMethodsTab />
          {/* deberia recibir los datos del usuario */}
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">Shopping history</span> (cantidad)
                </p>
                <p class="mb-1" style={{ fontSize: ".77rem;" }}>Web Design</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Website Markup</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>One Page</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Mobile Template</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Backend API</p>
                <div class="progress rounded mb-2" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "66%;" }} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card mb-4 mb-md-0">
              <div class="card-body">
                <p class="mb-4"><span class="text-primary font-italic me-1">assigment</span> Project Status
                </p>
                <p class="mb-1" style={{ fontSize: ".77rem;" }}>Web Design</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "80%" }} aria-valuenow="80"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Website Markup</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "72%" }} aria-valuenow="72"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>One Page</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "89%" }} aria-valuenow="89"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Mobile Template</p>
                <div class="progress rounded" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "55%" }} aria-valuenow="55"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <p class="mt-4 mb-1" style={{ fontSize: ".77rem;" }}>Backend API</p>
                <div class="progress rounded mb-2" style={{ height: "5px;" }}>
                  <div class="progress-bar" role="progressbar" style={{ width: "66%;" }} aria-valuenow="66"
                    aria-valuemin="0" aria-valuemax="100"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default ClientProfile;