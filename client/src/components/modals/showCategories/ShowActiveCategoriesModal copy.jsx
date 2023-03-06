import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../category/categoryModal.css";
import { EditActiveCategoryCard } from "../../editCategoryCard/EditActiveCategoryCard";

export const ShowActiveCategoriesModal = ({ onClose }) => {
  const { categories } = useSelector((state) => state.product);

  const activeCategories = Array.isArray(categories) ? categories.filter(c => c.isActive === true) : categories;

  return (
    <section className="categoryModal">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="categoriesList">
        {
          activeCategories.map(c => {
            return (
              <div key={c._id} className="categoriesItem">
                <EditActiveCategoryCard category={c} />
              </div>
            )
          })
        }
      </div>
    </section>
  );
};