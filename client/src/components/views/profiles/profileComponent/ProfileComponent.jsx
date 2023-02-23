import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AdminBoard } from "../adminBoard/index";
import ClientProfile from "../clientProfile/ClientProfile";
import SellerProfile from "../sellerProfile/SellerProfile";

const ProfileComponent = () => {
  
  const userLocal = useSelector((state) => state.user.userLocal);

  const [userType, setUserType] = useState("buyer");

  const buyerButton = () => {
    setUserType("buyer");
  };

  const sellerButton = () => {
    setUserType("seller");
  };


  

  return (
    <div>
      <section style={{ backgroundColor: "#eee;" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-4">
              <div class="card">
                <div class="card-body text-center">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                    alt="avatar"
                    class="rounded-circle img-fluid"
                    style={{ width: "150px;" }}
                  />
                  <h5 class="my-3">{`${userLocal?.name} ${userLocal.lastName}`}</h5>
                  <div class="d-flex justify-content-center mb-2">
                    
                    {!userLocal.isAdmin && userType !== "buyer" ? (
                      <span>
                        <h3>SELLER</h3>
                      <button
                        type="button"
                        class="btn btn-outline-primary ms-1"
                        onClick={() => buyerButton()}
                      >
                        Switch to buyer
                      </button>
                      </span>
                    ) : null}
                    {!userLocal.isAdmin && userType !== "seller" ? (
                      <span>
                        <h3>BUYER</h3>
                        <button
                        type="button"
                        class="btn btn-outline-primary ms-1"
                        onClick={() => sellerButton()}
                      >
                        Switch to seller
                      </button>
                      </span>
                    ) : null}
                    {userLocal.isAdmin? (
                      <h2>
                        Admin
                      </h2>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8">
              {userLocal.isAdmin? (
                <AdminBoard/>
              ) : userType === "seller" ? (
                <SellerProfile />
              ) : (
                <ClientProfile  />
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProfileComponent;
