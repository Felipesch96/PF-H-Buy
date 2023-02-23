import React from "react";
import Filters from "../../filters/Filters";
import Cards from "../../Cards/Cards";

const ProductsPage = () => {


	return (
		<div class="d-flex justify-content-center">
			<div class="row">
				<div class="col-9 col-md-3">
					<Filters />
				</div>
				<div class="col-12 col-sm-9">
					<Cards />
				</div>
			</div>
		</div>
	)
};

export default ProductsPage;
