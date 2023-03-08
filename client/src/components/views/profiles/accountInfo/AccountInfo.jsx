import React, { useEffect, useState } from "react";
import { AiOutlineSave } from "react-icons/ai";
import { FiEdit2 } from "react-icons/fi";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
import { editUser } from "../../../../helpers/editUser";
import "./AccountInfo.css";


const AccountInfo = () => {

  const [editName, setEditName] = useState(true);
  const [editPhone, setEditPhone] = useState(true);
  const { userLocal } = useSelector((state) => state.user);
  const [newUserInfo, setNewUserInfo] = useState();

  const handleChange = (e) => {
    setNewUserInfo({
      ...newUserInfo,
      [e.target.name]: e.target.value
    })
  };

  const submitChanges = (e) => {
    e.preventDefault();
    editUser(newUserInfo);
    setEditName(false);
    setEditPhone(false);
    Swal.fire({
      color: "white",
      background: "#1299",
      icon: "success",
      title: "User modified.",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    setNewUserInfo({
      ...newUserInfo,
      _id: userLocal._id,
      name: userLocal.name,
      lastName: userLocal.lastName,
      phone: userLocal.phone
    });
  }, []);

  return (
    <div class="card mb-4 mt-4 bg-dark-subtle cuerpo-carta">
      <div class="name-row">
        <div class="col-sm-3">
          <span class="mb-0">Full Name</span>
        </div>
        <div className="fullname">
          <input
            type="text"
            name="name"
            disabled={editName}
            value={newUserInfo?.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <input
            type="text"
            name="lastName"
            disabled={editName}
            value={newUserInfo?.lastName}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="lapicito">
          <FiEdit2 onClick={() => setEditName(!editName)} />
          {!editName && <AiOutlineSave onClick={submitChanges} />}
        </div>
      </div>
      <hr />
      <div className="name-row">
        <div class="col-sm-3">
          <span class="mb-0">Email</span>
        </div>
        <div className="name-row">
          <div class="col-sm-9">
            <input
              class="text-muted mr-2 email"
              value={userLocal.email}
              disabled
            />
          </div>
        </div>
      </div>
      <hr />
      <div className="name-row">

        <div class="col-sm-3">
          <span class="mb-0">Phone</span>
        </div>
        <div class="name-row">

          <div class="col-sm-9">
            <input
              type="number"
              name="phone"
              disabled={editPhone}
              value={newUserInfo?.phone}
            />
          </div>
          <div className="lapicito">
            <FiEdit2 onClick={() => setEditPhone(!editPhone)} />
            {!editPhone && <AiOutlineSave onClick={submitChanges} />}
          </div>
        </div>
      </div>
      <hr />
      <div className="name-row">

        <div class="col-sm-3">
          <span class="mb-0">Address</span>
        </div>
        <div className="name-row">
          <div class="col-sm-9">
            <span class="text-muted mb-0">{userLocal.address}</span>
          </div>
        </div>
      </div>
    </div>

  );
};

export default AccountInfo;
