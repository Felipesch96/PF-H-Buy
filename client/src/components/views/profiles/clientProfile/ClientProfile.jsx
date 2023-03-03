import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { getFavs } from "../../../../redux/thunks/favThunk";
import AccountInfo from "../accountInfo/AccountInfo";
import Wallet from "../paymentMethods/paymentMethodsTab/Wallet";
import "./ClientProfile.css";
const { REACT_APP_API_URL } = process.env;

const ClientProfile = () => {
  const user = useSelector((state) => state.user.userLocal);
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const {data} = await axios.get(`${REACT_APP_API_URL}/orders/${user._id}`);
    setOrders(data)
  }

  useEffect(() => {
    if (!orders) getOrders();
  }, [orders]); 


    return (
    <div>
      <div class="col-lg-8 col-md-8">
        <nav class="nav nav-tabs" id="nav-tab" role="tablist">
          <a
            class="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            href="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Home
          </a>
          <a
            class="nav-link"
            id="nav-account-tab"
            data-bs-toggle="tab"
            href="#nav-account"
            role="tab"
            aria-controls="nav-account"
            aria-selected="false"
          >
            Account
          </a>
          <a
            class="nav-link"
            id="nav-payment-tab"
            data-bs-toggle="tab"
            href="#nav-payment"
            role="tab"
            aria-controls="nav-payment"
            aria-selected="false"
          >
            Wallet
          </a>
        </nav>
        <div class="tab-content" id="nav-tabContent">
          <div
            class="tab-pane fade show active"
            id="nav-home"
            role="tabpanel"
            aria-labelledby="nav-home-tab"
          >
            <div class="column">
              <div class="col-md-6">
                <div class="card mb-4 mt-4 buyer-button">
                  <div class="card-body">
                    <span class="text-primary font-italic">
                      <div class="btn-group dropend">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Purchases (cant)
                        </button>
                        <ul class="dropdown-menu">
                        {orders && orders.map((element) => {
                            return (
                              <a class="dropdown-item" href="#">
                                    <h6>Order N° {element._id}</h6>
                                    <p>Total price: ${element.totalPrice}</p>
                                    <span>Products: </span>
                                    {element.items?.map((element) => {
                                      return(
                                        <div>
                                          <span>{element.product.name}</span>
                                          <p>${element.product.price}</p>
                                        </div>
                                      )
                                    })}
                              </a>
                            );
                          })}
                          
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mt-4 buyer-button">
                  <div class="card-body">
                    <span class="text-primary font-italic">
                      <div class="btn-group dropend">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Favorites (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <span>favorites 1</span>
                          </li>
                        </ul>
                        {/*    <ul class="dropdown-menu">
                          {favs.map((element) => {
                            return (
                              <ul key={element._id}>
                                <li>
                                  <h3>
                                    <Link
                                      to={`/products/${element.product_id?._id}`}
                                    >
                                      {element.product_id?.name}
                                    </Link>
                                  </h3>
                                </li>

                                <li>
                                  <h4>${element.product_id?.price}</h4>
                                </li>
                              </ul>
                            );
                          })}
                        </ul> */}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mt-4 buyer-button">
                  <div class="card-body">
                    <span class="text-primary font-italic">
                      <div class="btn-group dropend">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Inquiries (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <li>
                            <span>Product 1</span>
                          </li>
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="card mb-4 mt-4 buyer-button">
                  <div class="card-body">
                    <span class="text-primary font-italic">
                      <div class="btn-group dropend">
                        <button
                          type="button"
                          class="btn btn-primary dropdown-toggle"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Claims (cant)
                        </button>
                        <ul class="dropdown-menu">
                          <span>Claim 1</span>
                        </ul>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-account"
            role="tabpanel"
            aria-labelledby="nav-account-tab"
          >
            <AccountInfo />
            {/* la idea es que reciba los datos del usuario */}
          </div>
          <div
            class="tab-pane fade"
            id="nav-payment"
            role="tabpanel"
            aria-labelledby="nav-payment-tab"
          >
            <Wallet />
            {/* deberia recibir los datos del usuario */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
