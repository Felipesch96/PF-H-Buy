import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  fetchSearch,
  fetchSearchProductByCtg,
  getProductsByOrder,
} from "../../redux/thunks/productThunk";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, filter } = useSelector((state) => state.product);
  const [searchValue, setsearchValue] = useState(false);
  const [filterByCat, setFilterByCat] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    setFilterByCat(filter);
    dispatch(fetchCategories());
  }, [dispatch, filter]);

  const productByName = useSelector((state) => state.product.filtered);
  // console.log(productByName);

  async function submitSearch(e) {
    e.preventDefault();
    dispatch(fetchSearch(searchValue));
  }

  function handleChangeSearch(e) {
    setsearchValue(e.target.value);
  }

  function handleOrderInput(e) {
    // dispatch(getProductsByOrder(e.target.value));
  }
  function handleChangeType(e) {
    dispatch(fetchSearchProductByCtg(e.target.value));
  }

  // function handleName(e) {
  //   e.preventDefault();
  //   if (filterByCat) {
  //     filter.filter((f) => f.name === e.target.value);
  //   } else {
  //     dispatch(fetchSearch(e.target.value));
  //   }
  // }
  return (
    <div>
      <div
        id="sidebar"
        className="col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4"
      >
        {/* <h2 className="text-center mb-4 text-info fw-bold"></h2> */}
        <div className="row">
          <div className="col-lg-12 col-sm-6 col-12">
            <h6 class="p-1 border-bottom fw-bold">Categories</h6>
            <div>
              {categories?.map((c) => {
                return (
                  <div>
                    <input
                      type="radio"
                      name="categories"
                      value={c.name}
                      onChange={handleChangeType}
                    />
                    <label htmlFor="categories">{c.name}</label>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-lg-12 col-sm-6 col-12">
            <div>
              <h6 class="p-1 border-bottom fw-bold">Filter By</h6>

              <div class="d-flex justify-content-center">
                <div>
                  <form onSubmit={submitSearch}>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Search by name"
                      name="filter-by-name"
                      autoComplete="off"
                      onChange={handleChangeSearch}
                    />
                    <input
                      className="button--submit"
                      value="Search"
                      type="submit"
                    />
                  </form>
                </div>

                <ul class="list-group">
                  {/* <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
									<span class="fa fa-circle pr-1" id="men"></span>Word
								</a></li> */}
                </ul>
              </div>

              <div class="">
                {/* <h6 className="border-bottom">Cost</h6> */}
                <form class="ml-md-2 ">
                  <div class="form-inline border rounded p-sm-2 my-2">
                    <input
                      type="radio"
                      name="type"
                      value="A-Z"
                      id="higher"
                      onChange={handleOrderInput}
                    />
                    <label for="higher" class="pl-1 pt-sm-0 pt-1">
                      &nbsp;A-Z
                    </label>
                  </div>
                  <div class="form-inline border rounded p-sm-2 my-2">
                    <input
                      type="radio"
                      name="type"
                      value="Z-A"
                      id="order"
                      onChange={handleOrderInput}
                    />
                    <label for="lower" class="pl-1 pt-sm-0 pt-1">
                      &nbsp;Z-A
                    </label>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
