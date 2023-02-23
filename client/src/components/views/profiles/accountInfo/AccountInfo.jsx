import React, { useState } from "react";
import { useSelector } from "react-redux";

const AccountInfo = () => {

const usuario = useSelector((state) => state.user.userLocal);
console.log(usuario);

  return (
    <div>

      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Full Name</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{`${usuario.name} ${usuario.surname}`}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Email</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{usuario.email}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Phone</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{usuario.phone}</p>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <p class="mb-0">Address</p>
            </div>
            <div class="col-sm-9">
              <p class="text-muted mb-0">{usuario.adress}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AccountInfo;