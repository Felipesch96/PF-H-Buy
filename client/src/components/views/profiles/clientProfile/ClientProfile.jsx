import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteFavorite } from "../../../../helpers/deleteFavorite";
import { getFavs } from "../../../../redux/thunks/favThunk";
import { fetchProducts } from "../../../../redux/thunks/productThunk";
// import { Link } from "react-router-dom";
// import { getFavs } from "../../../../redux/thunks/favThunk";
import AccountInfo from "../accountInfo/AccountInfo";
import "./ClientProfile.css";
import Swal from "sweetalert2";

const { REACT_APP_API_URL } = process.env;

const ClientProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector(state => state.product);
  const { userLocal } = useSelector((state) => state.user);
  const { favList } = useSelector(state => state.favorite);
  // console.log(favList);
  const myFavorites = favList.filter(f => f.user_id === userLocal._id);
  // console.log(myFavorites);
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/orders/${userLocal._id}`);
    setOrders(data);
  };

  const handleClick = async (id) => {
    const { data } = await axios.get(`${REACT_APP_API_URL}/reviews/${id}?user_id=${userLocal._id}`);
    if (data.length) {
      alert("Ya hiciste este review");

    } else {
      history.push(`/review/${id}`);
    }
  };

  useEffect(() => {
    if (!orders) getOrders();
  }, [orders]);

  useEffect(() => {
    dispatch(getFavs());
    dispatch(fetchProducts());
  }, []);

  const onDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      color: "white",
      background: "#1299",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const favToDelete = myFavorites.filter(f => f.product_id === id);
        console.log(favToDelete);
        deleteFavorite(favToDelete[0]._id);
        dispatch(getFavs());
        Swal.fire({
          color: "white",
          background: "#1299",
          icon: "success",
          title: "Deleted!",
          text: "Your category has been deleted.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

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
                          Purchases ({orders?.length})
                        </button>
                        <ul class="dropdown-menu">
                          {orders &&
                            orders.map((order) => {
                              return (
                                <a class="dropdown-item" key={order._id}>

                                  {order.status === "approved"
                                    ? <div>
                                      <h6>Order N° {order._id}</h6>
                                      <span class="text-success">Status: payed</span>
                                      <p>Total price: ${order.totalPrice}</p>
                                      <span>Products: </span>
                                      {order.items?.map((element) => {
                                        return (
                                          <div key={element._id}>
                                            <span>{element.product.name}</span>
                                            <p>${element.product.price}</p>
                                            <span>
                                              <button
                                                onClick={() => handleClick(element.product._id)}
                                                type="button"
                                                class="btn btn-secondary btn-sm"
                                              >
                                                Rate the product
                                              </button>
                                            </span>
                                          </div>
                                        );
                                      })}
                                    </div>
                                    : null}

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
                          Favorites {`(${myFavorites.length})`}
                        </button>
                        <ul class="dropdown-menu lista-favoritos">
                          {myFavorites?.map(f => {
                            const producto = products.filter(p => p._id === f.product_id);
                            return (
                              <li className="cada-favorito">
                                <a href={`/products/${producto[0]?._id}`}>
                                  {`${producto[0]?.name} $ ${producto[0]?.price}`}
                                </a>
                                <button onClick={() => onDelete(producto[0]?._id)}>x</button>
                              </li>
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

        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
