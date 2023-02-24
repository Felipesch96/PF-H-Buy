import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchOrderInFilter,
  fetchSearchInFilter,
  fetchSearchProductByCtg,
} from "../../redux/thunks/productThunk";
import "./Filter.css";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, filter } = useSelector((state) => state.product);
  const [filterByCat, setFilterByCat] = useState();

  useEffect(() => {
    setFilterByCat(filter);
    dispatch(fetchCategories());
  }, [dispatch, filter]);

  function handleChangeSearch(e) {
    e.preventDefault();
    dispatch(fetchSearchInFilter(e.target.value));
  }

  function handleOrderInput(e) {
  dispatch(fetchOrderInFilter(e.target.value));
  }

  function handleChangeType(e) {
    dispatch(fetchSearchProductByCtg(e.target.value));
  }

  return (
    <div>
      <div
        id="sidebar"
        className="col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4 contenedor-filtros"
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
              <div class="d-flex justify-content-center">
                <div>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search by name"
                    name="filter-by-name"
                    autoComplete="off"
                    onChange={handleChangeSearch}
                  />
                </div>

                <ul class="list-group">
                  {/* <li class="list-group-item list-group-item-action mb-2 rounded"><a href="#">
									<span class="fa fa-circle pr-1" id="men"></span>Word
								</a></li> */}
                </ul>
              </div>

              <div class="">
                {/* <h6 className="border-bottom">Cost</h6> */}
                {/* <form class="ml-md-2 ">
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
                </form> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
