import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../buttons/Login/Login";

const NavBar = () => {


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li className="nav-item btn">
                <Login />
                {/* hacer condicional si esta logeado con auth0, ver como crea usuarios que no son de google */}
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div >
  )
};

export default NavBar;