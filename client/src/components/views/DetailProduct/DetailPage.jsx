import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  clearDetailProduct,
  fetchDetailProduct,
} from "../../../redux/thunks/productThunk";
import LoaderCard from "../../Loaders/CardLoader/CardLoader";
import DetailCard from "./DetailCard";
import "./DetailProduct.css";

const DetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const detailProduct = useSelector((state) => state.product.detailproduct);

  useEffect(() => {
    dispatch(fetchDetailProduct(id));
    return () => {
      dispatch(clearDetailProduct());
    };
  }, [dispatch, id]);

  return <>{detailProduct.name ? <DetailCard /> : <LoaderCard />}</>;
};

export default DetailPage;
