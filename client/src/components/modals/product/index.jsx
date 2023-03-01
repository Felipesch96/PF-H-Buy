import CreateProductFrom from "./CreateProductForm";
import "./productsModal.css";

export const ProductModal = ({ onClose }) => {

  return (
    <section className="productModal-seller">
      <CreateProductFrom onClose={onClose} />
    </section>
  );
};
