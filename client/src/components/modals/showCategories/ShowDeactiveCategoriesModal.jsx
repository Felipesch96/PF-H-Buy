import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../category/categoryModal.css";
import { EditCategoryCard } from "../../editCategoryCard";

export const ShowDeactiveCategoriesModal = ({ onClose }) => {
  const { categories } = useSelector((state) => state.product);

  const deactiveCategories = categories.filter(c => c.isActive === false);
  return (
    <section className="categoryModal">
      {/* <div className="showCategories"> */}
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="categoriesList">
        {
          deactiveCategories
            ? deactiveCategories.map((c) => (
              <div key={c._id} className="categoriesItem">
                <EditCategoryCard categories={c} />
              </div>
            ))
            : "There is no deactivated categories"
        }
        {/* {categories.map((c) => (
          <div key={c._id} className="categoriesItem">
            <EditCategoryCard categories={c} />
          </div>
        ))} */}
      </div>
      {/* </div> */}
    </section>
  );
};
