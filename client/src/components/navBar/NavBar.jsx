import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import Login from "../buttons/Login/Login";
import Logout from "../buttons/Logout/Logout";
import "./NavBar.css";
import { getProductsByName } from "../../redux/thunks/productThunk";


const NavBar = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  console.log(user);
  // const user = useSelector((state) => state.user.user)
  // console.log(user)
  const [searchValue, setsearchValue] = useState(false);

  function handleChangeSearch(e) {
    setsearchValue(e.target.value);
  }

  function submitSearch(e) {
    e.preventDefault();
    dispatch(getProductsByName(searchValue));
  }

  const [serachNavStorage, setSearchNavStorage] = useState("");
  function handleSearchInput(e) {
    setSearchNavStorage(e.target.value);
    console.log(serachNavStorage);
  };

  const searchHandler = (e) => {
    e.preventDefault();
    getProductsByName(serachNavStorage)
  }

  return (<div>
        <nav class="navbar navbar-expand-lg border-bottom barra-navegador"  >
        <div class="container-fluid d-flex justify-content-center ">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <img src={require("./media/logoh.png")} style={{ width: "50px" }} alt="" />

          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul class="navbar-nav mb-2 mb-lg-0 text-center fs-5 align-items-center">
              <li className="nav-item">
                <Link className="nav-link mt-1" to="/">
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

              </li>
            </ul>
            <div>
              <form
                class="d-flex justify-content-center"
                role="search"
                onSubmit={submitSearch}
              >
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search by name"
                  name="filter-by-name"
                  aria-label="Search"
                  value={serachNavStorage}
                  onChange={handleChangeSearch} />
                <button class="btn btn-outline-success" type="submit" onClick={(e) => searchHandler(e)}>Search</button>
              </form>
            </div>
            <ul class="navbar-nav mb-2 mb-lg-0 text-center fs-5 align-items-center">

              <li>
                <div class="btn-group">
                  <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="bi bi-person-square"></i>
                  </button>
                  {
                    isAuthenticated
                      ? <ul class="dropdown-menu dropdown-menu-end justify-content-center">
                        <li>
                          <Link className="nav-link mt-1" to="/profile">
                            Profile
                          </Link>
                        </li>
                        <li>...</li>
                        <li>...</li>
                        <li><hr class="dropdown-divider" /></li>
                        <li><Logout /></li>
                      </ul>
                      : <ul class="dropdown-menu justify-content-center">
                        <li>
                          <Login />
                        </li>
                        {/* <li>
                          <Link className="nav-link mt-1" to="/signup">
                             Signup
                          </Link>
                        </li> */}
                      </ul>
                  }
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  )
};

export default NavBar;