import React from "react";
import { useSelector } from "react-redux";

const AccountInfo = () => {
  const { userLocal } = useSelector((state) => state.user);
  return (
    <div>
      <div class="card mb-4">
        <div class="card-body">
          <div class="row">
            <div class="col-sm-3">
              <span class="mb-0">Full Name</span>
            </div>
            <div class="col-sm-9">
              <span class="text-muted mb-0">
                {userLocal.lastName
                  ? `${userLocal?.name} ${userLocal.lastName}`
                  : `${userLocal.name}`}
              </span>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <span class="mb-0">Email</span>
            </div>
            <div class="col-sm-9">
              <span class="text-muted mb-0">{userLocal.email}</span>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <span class="mb-0">Phone</span>
            </div>
            <div class="col-sm-9">
              <span class="text-muted mb-0">{userLocal.phone}</span>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-sm-3">
              <span class="mb-0">Address</span>
            </div>
            <div class="col-sm-9">
              <span class="text-muted mb-0">{userLocal.address}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
