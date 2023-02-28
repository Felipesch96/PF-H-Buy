import "./LoadersProducts.css";
const LoadersProducts = () => {
  return (
    <div class="container">
      <div class="position-absolute top-50 start-50 translate-middle">
        <span class="loader"></span>
        <span class="loanding text">Loading ..</span>
      </div>
    </div>
  );
};

export default LoadersProducts;
