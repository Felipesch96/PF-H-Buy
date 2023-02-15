import React from "react";
// import { useDispatch, useSelector } from "react-redux";

const Filters = () => {

	// const dispatch = useDispatch();

	
	function handleOrderInput(e) {
		e.preventDefault();
		// dispatch(getProductsByOrder(e.target.value));

	};

	function handleFilterInput(e) {
		e.preventDefault();
		// dispatch(getProductsByName(e.target.value));
	};

	return (
		<div>
			<div id="sidebar" className="col-lg-2 col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4">
				{/* <h2 className="text-center mb-4 text-info fw-bold"></h2> */}
				<div className="row">

					<div className="col-lg-12 col-sm-6 col-12">
						<h6 class="p-1 border-bottom fw-bold">Categories</h6>
						<ul>
							<li><a href="#"></a></li>
						</ul>
					</div>

					<div className="col-lg-12 col-sm-6 col-12">
						<div>
							<h6 class="p-1 border-bottom fw-bold">Filter By</h6>

							<div>
								<input className='form-control' type="text" placeholerder="Search by word..." name="filter-by-name" onChange={handleFilterInput} ></input>
							</div>

							<ul class="list-group">
								{/* <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
									<span class="fa fa-circle pr-1" id="men"></span>Word
							</a></li> */}
							</ul>
						</div>

						<div>
							{/* <h6 className="border-bottom">Cost</h6> */}
							<form class="ml-md-2 ">
								<div class="form-inline border rounded p-sm-2 my-2">
									<input type="radio" name="type" value="A-Z" id="higher" onChange={handleOrderInput} />
									<label for="higher" class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
								</div>
								<div class="form-inline border rounded p-sm-2 my-2">
									<input type="radio" name="type" value="Z-A" id="lower" onChange={handleOrderInput} />
									<label for="lower" class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
								</div>
							</form>
						</div>
					</div>

				</div>
			</div>

		</div>
	)
};

export default Filters;
