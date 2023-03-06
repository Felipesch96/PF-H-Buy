import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../category/categoryModal.css";
import { EditDeactiveCategoryCard } from "../../editCategoryCard/EditDeactiveCategoryCard";

export const ShowDeactiveCategoriesModal = ({ onClose }) => {
  const { categories } = useSelector((state) => state.product);

  const deactiveCategories = Array.isArray(categories) ? categories.filter(c => c.isActive === false) : categories;
  return (
    <section className="categoryModal">
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="categoriesList">
        {
          deactiveCategories
            ? deactiveCategories.map((c) => (
              <div key={c._id} className="categoriesItem">
                <EditDeactiveCategoryCard category={c} />
              </div>
            ))
            : "There is no deactivated categories"
        }
      </div>
    </section>
  );
};
