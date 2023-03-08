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
import Swal from "sweetalert2";
import AccountInfo from "../accountInfo/AccountInfo";
import "./ClientProfile.css";
const { REACT_APP_API_URL } = process.env;

const ClientProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { products } = useSelector((state) => state.product);
  const { userLocal } = useSelector((state) => state.user);
  const { favList } = useSelector((state) => state.favorite);
  const myFavorites = favList.filter((f) => f.user_id === userLocal._id);
  const [orders, setOrders] = useState();

  const getOrders = async () => {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/orders/${userLocal._id}`
    );
    setOrders(data);
  };

  const handleClick = async (id) => {
    const { data } = await axios.get(
      `${REACT_APP_API_URL}/reviews/${id}?user_id=${userLocal._id}`
    );
    if (data.length) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You have already reviewed this product!",
      });
    } else {
      history.push(`/review/${id}`);
    }
  };

  useEffect(() => {
    if (!orders) getOrders();
    dispatch(getFavs())

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
        const favToDelete = myFavorites.filter((f) => f.product_id === id);
        console.log(favToDelete);
        deleteFavorite(favToDelete[0]._id);
        dispatch(getFavs());
        Swal.fire({
          color: "white",
          background: "#1299",
          icon: "success",
          title: "Deleted!",
          text: "Your favorite has been deleted.",
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
            Purchases ({orders?.length ? orders?.length : 0})
          </a>
          <a
            class="nav-link"
            id="nav-fav-tab"
            data-bs-toggle="tab"
            href="#nav-fav"
            role="tab"
            aria-controls="nav-fav"
            aria-selected="false"
          >
            Favorites ({myFavorites.length ? (myFavorites.length) : 0})
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
            <div className="orders-list">
              <div class="card mt-3 bg-dark-subtle">
                <div>
                  <span class="font-italic bg">
                    <ul>
                      {orders?.length ? orders &&
                        orders.map((order) => {
                          return (
                            <div key={order._id}>
                              {order.status === "approved"
                                ? <div class="bg-light one-order shadow-lg me-2 p-3 rounded mt-3">
                                  <h6 class="order-Title mt-3 text-primary-emphasis">Order N° {order._id}</h6>
                                  <span class="text-success">Status: payed</span>
                                  <p class="totalPrice ">Total price: ${order.totalPrice}</p>
                                  <span>Products: </span>
                                  {order.items?.map((element) => {
                                    return (
                                      <div key={element._id} className="product-container">
                                        <div>
                                          <span>{element.product.name}</span>
                                        </div>
                                        <span>
                                          <button
                                            onClick={() =>
                                              handleClick(
                                                element.product._id
                                              )
                                            }
                                            type="button"
                                            class="btn btn-primary btn-sm"
                                          >
                                            Score this product
                                          </button>
                                        </span>
                                      </div>
                                    );
                                  })}
                                </div>
                                : null}

                            </div>
                          );
                        })
                        : <div>
                          <div class="no-purchases p-3">You have no purchases yet!</div>
                          <button type="button" class="btn btn-primary" onClick={() => history.push("/products")}>Search products</button>
                        </div>}
                    </ul>
                  </span>
                </div>
              </div>

            </div>
          </div>
          <div
            class="tab-pane fade"
            id="nav-fav"
            role="tabpanel"
            aria-labelledby="nav-account-tab"
          >
            <div class="card mb-4 mt-4 bg-dark-subtle">
              <span class="font-italic">
                <ul className="lista-favoritos">
                  {myFavorites.length ? myFavorites?.map(f => {
                    const producto = products.filter(p => p._id === f.product_id);
                    return (
                      <li className="cada-favorito">
                        <a class="tag text-secondary text-decoration-none" href={`/products/${producto[0]?._id}`}>
                          {`${producto[0]?.name} $ ${producto[0]?.price}`}
                        </a>
                        <button type="button" class="btn btn-primary"
                          onClick={() => onDelete(producto[0]?._id)}>x</button>

                      </li>
                    );
                  })
                    : <div>
                      <div class="no-favs p-3">You have no favorites...</div>
                      <button type="button" class="btn btn-primary" onClick={() => history.push("/products")}>Search products</button>
                    </div>}
                </ul>
              </span>
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
