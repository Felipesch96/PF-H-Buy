import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { ProductModal } from "../../../modals/product";
import { CategoryModal } from "../../../modals/category";
import { ShowDeactiveCategoriesModal } from "../../../modals/showCategories/ShowDeactiveCategoriesModal";
import { ShowDeactiveProductModal } from "../../../modals/showProducts/ShowActiveProductModal";
import { ShowActiveUsersModal } from "../../../modals/showUsers/ShowActiveUsersModal";
import { ShowDeactiveUsersModal } from "../../../modals/showUsers/ShowDeactiveUsersModal";


import "./adminBoard.css";
import {
  fetchCategories,
  fetchProducts,
} from "../../../../redux/thunks/productThunk";
import { fetchUsers } from "../../../../redux/thunks/userThunk";
import { ShowActiveProductModal } from "../../../modals/showProducts/ShowDeactiveProductModal";
import { ShowActiveCategoriesModal } from "../../../modals/showCategories/ShowActiveCategoriesModal copy";
import { ModifyProductModal } from "../../../modals/showProducts/ModifyProductModal";
import { ModifyUserStatusModal } from "../../../modals/showUsers/ModifyUserStatusModal";



export const AdminBoard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
    dispatch(fetchUsers())
  }, [dispatch]);

  const [categoryModal, setCategoryModal] = useState(false);
  const [showActiveCategories, setShowActiveCategories] = useState(false);
  const [showDeactiveCategories, setShowDeactiveCategories] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [modifyProductModal, setModifyProductModal] = useState(false);
  const [showActiveProducts, setShowActiveProducts] = useState(false);
  const [showDeactiveProducts, setShowDeactiveProducts] = useState(false);
  const [showActiveUsers, setShowActiveUsers] = useState(false);
  const [showDeactiveUsers, setShowDeactiveUsers] = useState(false);
  const [modifyUserStatus, setModifyUserStatus] = useState(false);


  return (
    <main className="adminBoard">
      <section className="buttons">
        <section className="creationButtons">
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(true);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false)
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Create Categories
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(true);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Show active categories
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(true)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Show deactive categories
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(true);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Create Product
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(true);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Modify Product
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(true);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Show active products
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(true);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Show deactive products
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(true);
              setShowDeactiveUsers(false);
              setModifyUserStatus(false);
            }}
          >
            Show active users
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(true);
              setModifyUserStatus(false);
            }}
          >
            Show deactive users
          </button>
          <button
            className="adminButton"
            onClick={() => {
              setCategoryModal(false);
              setShowActiveCategories(false);
              setShowDeactiveCategories(false)
              setProductModal(false);
              setModifyProductModal(false);
              setShowActiveProducts(false);
              setShowDeactiveProducts(false);
              setShowActiveUsers(false);
              setShowDeactiveUsers(false);
              setModifyUserStatus(true);
            }}
          >
            Modify user status
          </button>
        </section>
      </section>
      <div className="modals">
        {categoryModal && <CategoryModal onClose={setCategoryModal} />}

        {showActiveCategories && <ShowActiveCategoriesModal onClose={setShowActiveCategories} />}

        {showDeactiveCategories && <ShowDeactiveCategoriesModal onClose={setShowDeactiveCategories} />}

        {productModal && <ProductModal onClose={setProductModal} />}

        {modifyProductModal && <ModifyProductModal onClose={setModifyProductModal} />}

        {showActiveProducts && <ShowActiveProductModal onClose={setShowActiveProducts} />}

        {showDeactiveProducts && <ShowDeactiveProductModal onClose={setShowDeactiveProducts} />}

        {showActiveUsers && <ShowActiveUsersModal onClose={setShowActiveUsers} />}

        {showDeactiveUsers && <ShowDeactiveUsersModal onClose={setShowDeactiveUsers} />}

        {modifyUserStatus && <ModifyUserStatusModal onClose={setModifyUserStatus} />}
      </div>
    </main>
  );
};