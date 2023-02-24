import React, { useState } from "react";
import { useSelector } from "react-redux";
import { AdminBoard } from "../adminBoard/index";
import ClientProfile from "../clientProfile/ClientProfile";
import SellerProfile from "../sellerProfile/SellerProfile";
import "./profileComponent.css";


const ProfileComponent = () => {
  
  const userLocal = useSelector((state) => state.user.userLocal);
  console.log(userLocal);
  const [userType, setUserType] = useState("Buyer");

  const buyerButton = () => {
    setUserType("Buyer");
  };

  const sellerButton = () => {
    setUserType("Seller");
  };

  return (
    <div class="container-fluid pagina-perfiles">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-sm-6">
          <div class={userLocal.isAdmin? "card perfil-admin-contenedor" : userType === "Buyer" ? "card perfil-buyer-contenedor" : "card perfil-seller-contenedor"}>
            <div class="card-body text-center">
              <img src={userLocal.image} alt="avatar"
                class="rounded-circle img-fluid" style={{ width: "150px;" }} />
              <h5 class="my-3 buttons-card-profile">{userLocal.lastName ? `${userLocal?.name} ${userLocal.lastName}` :`${userLocal?.name}` }</h5>
              <p class="text-muted mb-1">{userLocal.isAdmin?<h3>Admin</h3>:<h3>{userType}</h3>}</p>
              <div class="d-flex justify-content-center mb-2">
                {!userLocal.isAdmin && userType !== "Buyer" ? <button
                  type="button"
                  class="btn btn-outline-light ms-1"
                  onClick={() => buyerButton()}
                >
                  Switch to buyer
                </button> : null}
                {!userLocal.isAdmin && userType !== "Seller" ? <button
                  type="button"
                  class="btn btn-outline-light ms-1"
                  onClick={() => sellerButton()}
                >
                  Switch to seller
                </button> : null}
                
              </div>
            </div>
          </div>

        </div>
        <div class="col-lg-6 col-md-6 contenedor-perfiles">

          {
            userLocal.isAdmin
              ? <AdminBoard />
              : userType === "Seller"
                ? <SellerProfile />
                : <ClientProfile />
          }

        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
