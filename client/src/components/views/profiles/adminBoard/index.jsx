import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ProductModal } from "../../../modals/product";
import { CategoryModal } from "../../../modals/category";
import { ShowCategoriesModal } from "../../../modals/showCategories";
import { ShowProductModal } from "../../../modals/showProducts";
import { ShowUsersModal } from "../../../modals/showUsers";

import "./adminBoard.css";
import {
  fetchCategories,
  fetchProducts,
} from "../../../../redux/thunks/productThunk";

import { fetchUsers } from "../../../../redux/thunks/userThunk";

export const AdminBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchUsers())
  }, [dispatch]);

  const [categoryModal, setCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  

  return (
    <main className="adminBoard">
      {/* <div className="leftNavBar"> */}
      <section className="buttons">
        <section className="creationButtons">
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(true);
              setProductModal(false);
              setShowProducts(false);
              setShowCategories(false);
              setShowUsers(false)
            }}
          >
            Create Categories
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setProductModal(true);
              setShowProducts(false);
              setShowCategories(false);
              setShowUsers(false)
            }}
          >
            Create Product
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setProductModal(false);
              setShowCategories(true);
              setShowProducts(false);
              setShowUsers(false)
            }}
          >
            Show categories
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setProductModal(false);
              setShowCategories(false);
              setShowProducts(true);
              setShowUsers(false)
            }}
          >
            Show products
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setProductModal(false);
              setShowCategories(false);
              setShowProducts(false);
              setShowUsers(true)
            }}
          >
            Show users
          </button>
        </section>
      </section>
      <div>
        {categoryModal && <CategoryModal onClose={setCategoryModal} />}

        {productModal && <ProductModal onClose={setProductModal} />}

        {showCategories && <ShowCategoriesModal onClose={setShowCategories} />}

        {showProducts && <ShowProductModal onClose={setShowProducts} />}

        {showUsers && <ShowUsersModal onClose={setShowUsers} />}
      </div>
    </main>
  );
};
