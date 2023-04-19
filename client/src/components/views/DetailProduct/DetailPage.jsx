import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearDetailProduct,
  fetchDetailProduct,
  fetchProductView,
} from "../../../redux/thunks/productThunk";
import CardLoader from "../../CardLoader/CardLoader";
import DetailCard from "./DetailCard";
import "./DetailProduct.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);
  const userLocal = useSelector((state) => state.user.userLocal);
  const payload = {
    product_id: id,
    user_id: userLocal._id,
  };

  const userVerify = () => {
    if (userLocal._id) {
      dispatch(fetchProductView(payload));
    }
  };

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
    userVerify();
    return () => {
      dispatch(clearDetailProduct());
    };
  }, [dispatch, id]);

  return <>{detailProduct.name ? <DetailCard /> : <CardLoader />}</>;
};

export default DetailPage;
