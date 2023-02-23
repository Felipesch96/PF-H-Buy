import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductModal } from "../../../modals/product";
import { CategoryModal } from "../../../modals/category";

import "./adminBoard.css";
import {
  fetchCategories,
  fetchProducts,
} from "../../../../redux/thunks/productThunk";
import { ShowCategoriesModal } from "../../../modals/showCategories";
import { ShowProductModal } from "../../../modals/showProducts";

export const AdminBoard = () => {
  const dispatch = useDispatch();

  const { products, categories } = useSelector((state) => state.product);
  
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  const [categoryModal, setCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  

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
            }}
          >
            Show products
          </button>
        </section>
      </section>
      {/* </div> */}
      <div>
        {categoryModal && <CategoryModal onClose={setCategoryModal} />}

        {productModal && <ProductModal onClose={setProductModal} />}

        {showCategories && <ShowCategoriesModal onClose={setShowCategories} />}

        {showProducts && <ShowProductModal onClose={setShowProducts} />}
      </div>
    </main>
  );
};
