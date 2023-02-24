import "./productsModal.css";
import CreateProductFrom from "./CreateProductForm";

export const ProductModal = ({ onClose }) => {
  return (
    <section className="productModal-seller">
      <CreateProductFrom onClose={onClose} />
    </section>
  );
};
