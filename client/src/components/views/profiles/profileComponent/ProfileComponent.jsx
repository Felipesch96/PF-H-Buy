import React, { useState } from "react";
import { AdminBoard } from "../adminBoard/index";
import ClientProfile from "../clientProfile/ClientProfile";
import SellerProfile from "../sellerProfile/SellerProfile";

const ProfileComponent = () => {

  const isSeller = 1;
  const isAdmin = 1;
  const [userType, setUserType] = useState("buyer");

  const buyerButton = () =>{
    setUserType("buyer");
  };

  const sellerButton = () =>{
    setUserType("seller");
  };

  const adminButton = () =>{
    setUserType("admin");
  };

  return (
    <div>
      <section style={{ backgroundColor: "#eee;" }}>
        <div class="container py-5">
          <div class="row">
            <div class="col-lg-4">
              <div class="card mb-4">
                <div class="card-body text-center">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                    class="rounded-circle img-fluid" style={{ width: "150px;" }} />
                  <h5 class="my-3">John Smith</h5>
                  <p class="text-muted mb-1">{userType}</p>
                  <div class="d-flex justify-content-center mb-2">
                    {isSeller && userType!== "buyer"?<button
                      type="button"
                      class="btn btn-outline-primary ms-1"
                      onClick={() => buyerButton()}
                    >
                      Buyer
                    </button>:null}
                    {isSeller && userType!== "seller"?<button
                      type="button"
                      class="btn btn-outline-primary ms-1"
                      onClick={() => sellerButton()}
                    >
                      Seller
                    </button>:null}
                    {isAdmin && userType!== "admin"?<button
                      type="button"
                      class="btn btn-outline-primary ms-1"
                      onClick={() => adminButton()}
                    >
                      Admin
                    </button>:null}
                  </div>
                </div>
              </div>
              
            </div>
            <div class="col-lg-8">

              {
                userType === "buyer"
                  ? <ClientProfile />
                  : userType === "seller"
                    ? <SellerProfile />
                    : <AdminBoard />
              }

            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default ProfileComponent;