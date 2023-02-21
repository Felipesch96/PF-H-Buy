import React from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";

const ProductsPage = () => {
  return (
    <div>
      <section class="productsPage">
        <div class="container-fluid text-center">
          <div class="row">
            <div class="col-12 col-md-3 ">
              <Filters />
            </div>
            <div class="col-8">
              <Cards />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
