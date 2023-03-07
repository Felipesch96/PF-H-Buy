import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ProductModal } from "../../../modals/product";
import { MyProductsModal } from "../../../modals/showProducts/MyProductsModal";
import AccountInfo from "../accountInfo/AccountInfo";
import Wallet from "../paymentMethods/paymentMethodsTab/Wallet";
import "./SellerProfile.css";
const { REACT_APP_API_URL } = process.env;

const SellerProfile = () => {
  const [productModal, setProductModal] = useState(false);
  const [myProductsModal ,setMyProductsModal] = useState();
  const user = useSelector((state) => state.user.userLocal);
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const {data} = await axios.get(`${REACT_APP_API_URL}/orders?seller_id=${user._id}`);
    setOrders(data)
  }

  useEffect(() => {
    if (!orders) getOrders();
  }, [orders]); 

  return (
    <div class="container-fluid seller-profile">
      <div class="col-lg-8">
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
            id="nav-payment-tab"
            data-bs-toggle="tab"
            href="#nav-payment"
            role="tab"
            aria-controls="nav-payment"
            aria-selected="false"
          >
            Wallet
          </a>
          <a
            class="nav-link"
            id="nav-create-product-tab"
            data-bs-toggle="tab"
            href="#nav-create-product"
            role="tab"
            aria-controls="nav-create-product"
            aria-selected="false"
            onClick={() => {
              setProductModal(true);
            }}
          >
            Create Product
          </a>
          <a
            class="nav-link"
            id="nav-my-products-tab"
            data-bs-toggle="tab"
            href="#nav-my-products"
            role="tab"
            aria-controls="nav-my-products"
            aria-selected="false"
            onClick={() => {
              setMyProductsModal(true);
            }}
          >
            My products
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
              {/* <div class="col-md-6"> */}
              <div class="card mb-4 mt-4 seller-button">
                <div class="card-body">
                  <span class="text-primary font-italic me-1">
                    <div class="btn-group dropend">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Sales ({orders?.length})
                      </button>
                      <ul class="dropdown-menu">
                      {orders && orders.map((element) => {
                            return (
                              <a class="dropdown-item" key={element._id}>
                                    <h6>Order N° {element._id}</h6>
                                    <p>Total price: ${element.totalPrice}</p>
                                    <span>Products: </span>
                                    {element.items?.map((element) => {
                                      return(
                                        <div key={element._id}>
                                          <span>{element.product.name}</span>
                                          <p>${element.product.price}</p>
                                          <span><button type="button" class="btn btn-secondary btn-sm">Mark as sent</button></span>
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
              {/* </div> */}
              {/* <div class="col-md-6"> */}
              <div class="card mb- mt-4 seller-button">
                <div class="card-body">
                  <span class="text-primary font-italic me-1">
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
                        <li>
                          <span>claim</span>
                        </li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>
              {/* </div> */}
              {/* <div class="col-md-6"> */}
              <div class="card mb-4 mt-4 seller-button">
                <div class="card-body">
                  <span class="text-primary font-italic me-1">
                    <div class="btn-group dropend">
                      <button
                        type="button"
                        class="btn btn-primary dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Questions (cant)
                      </button>
                      <ul class="dropdown-menu">
                        <li>Question 1</li>
                      </ul>
                    </div>
                  </span>
                </div>
              </div>
              {/* </div> */}
            </div>
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
          <div
            class="tab-pane fade"
            id="nav-create-product"
            role="tabpanel"
            aria-labelledby="nav-create-product-tab"
          >
            {productModal && <ProductModal onClose={setProductModal} />}
          </div>
          <div
            class="tab-pane fade"
            id="nav-my-products"
            role="tabpanel"
            aria-labelledby="nav-my-products-tab"
          >
            {myProductsModal && <MyProductsModal onClose={setMyProductsModal} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
