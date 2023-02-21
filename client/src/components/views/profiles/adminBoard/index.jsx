import { AiOutlineCloseCircle } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { ProductModal } from "../../../modals/product";
import { CategoryModal } from "../../../modals/category";

import { EditProductCard } from "../../../editProductCard";
import { EditCategoryCard } from "../../../editCategoryCard";
import "./adminBoard.css";
import { fetchCategories, fetchProducts } from "../../../../redux/thunks";

export const AdminBoard = () => {
    const { products, categories } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, [dispatch, JSON.stringify(products)]);

  const [categoryModal, setCategoryModal] = useState(false);
  const [productModal, setProductModal] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  

  return (
    <main className="adminBoard">
      <div className="leftNavBar">
        <section className="buttons">
          <section className="profile">
            <h3>Profile</h3>
          </section>

          <section className="creationButtons">
            <button
              className="adminButton"
              onClick={() => {
                setProductModal(false);
                setCategoryModal(true);
              }}
            >
              Create Categories
            </button>
            <button
              className="adminButton"
              onClick={() => {
                setCategoryModal(false);
                setProductModal(true);
              }}
            >
              Create Product
            </button>
            <button
              className="adminButton"
              onClick={() => {
                setShowProducts(false);
                setShowCategories(true);
              }}
            >
              Show categories
            </button>
            <button
              className="adminButton"
              onClick={() => {
                setShowCategories(false);
                setShowProducts(true);
              }}
            >
              Show products
            </button>
          </section>
        </section>
      </div>

      {categoryModal && <CategoryModal onClose={setCategoryModal} />}

      {productModal && <ProductModal onClose={setProductModal} />}
      <section className="showSections">
        {showCategories && (
          <div className="showCategories">
            <AiOutlineCloseCircle
              onClick={() => setShowCategories(false)}
              className="close"
            />
            <div className="categoriesList">
              {categories.map((c) => (
                <div className="categoriesItem">
                  <EditCategoryCard categories={c} />
                </div>
              ))}
            </div>
          </div>
        )}
        {showProducts && (
          <div className="showProducts">
            <AiOutlineCloseCircle
              onClick={() => setShowProducts(false)}
              className="close"
            />
            <div className="productsList">
              {products.map((p) => (
                <div className="productsItem">
                  <EditProductCard products={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </main>
  );
};
