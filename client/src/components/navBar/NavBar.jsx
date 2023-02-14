import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../buttons/Login/Login";

const NavBar = () => {


  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-light sticky border-bottom">
        <div class="container-fluid">

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
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
              <li className="nav-item btn">
                <Login />
                {/* hacer condicional si esta logeado con auth0, ver como crea usuarios que no son de google */}
              </li>
            </ul>
            <form className="d-flex col-ms-8" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                // value={serachNavStorage}
                // onChange={(e) => handleSearchInput(e)}
              />
              <button className="btn btn-outline-success" type="submit" 
              // onClick={() => setSearchNavStorage()}
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

    </div >
  )
};

export default NavBar;