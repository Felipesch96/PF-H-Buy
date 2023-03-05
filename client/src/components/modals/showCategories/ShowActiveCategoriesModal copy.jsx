import React from "react";
import { useSelector } from "react-redux";
import { AiOutlineCloseCircle } from "react-icons/ai";
import "../category/categoryModal.css";
import { EditCategoryCard } from "../../editCategoryCard";

export const ShowActiveCategoriesModal = ({ onClose }) => {
  const { categories } = useSelector((state) => state.product);

  const activeCategories = categories.filter(c => c.isActive === true);
  return (
    <section className="categoryModal">
      {/* <div className="showCategories"> */}
      <AiOutlineCloseCircle
        onClick={() => onClose(false)}
        className="closeIcon"
      />
      <div className="categoriesList">
        {
          activeCategories.map(c => {
            return (
              <div key={c._id} className="categoriesItem">
                <p>{c.name}</p>
                
              </div>
            )
          })
        }
        {/* {activeCategories.map((c) => (
          <div key={c._id} className="categoriesItem">
            <EditCategoryCard categories={c} />
          </div>
        ))} */}
      </div>
      {/* </div> */}
    </section>
  );
};