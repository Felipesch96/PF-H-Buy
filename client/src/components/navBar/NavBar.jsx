import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux"
// import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Login from "../buttons/Login/Login";
import Logout from "../buttons/Logout/Logout";
import "./NavBar.css";

const NavBar = () => {
  // const { user, isAuthenticated } = useAuth0();
  // console.log(user);
  const user =  useSelector((state) => state.user.user)
	console.log(user)

  return (
    <div>
      <nav class="navbar navbar-expand-lg border-bottom"  >
        <div class="container-fluid d-flex justify-content-center ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mb-2 mb-lg-0 text-center fs-5">
            <li className="nav-item">
                <Link className="nav-link mt-1" to="/">
                  {"<"}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link mt-1" to="/profile">
                Profile
              </Link>
              </li>
  
              <li>
                <Login />

              </li>
              <li>
                <Logout />

              </li>
              <li>
              <Link className="nav-link mt-1" to="/login">
                  Login
                </Link>
              </li>
            </ul>
            <div>
            <form class="d-flex justify-content-center" role="search">
                  <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
          </div>
        </div>
      </nav>
    </div >
  )
};

export default NavBar;