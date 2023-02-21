import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProducts,
  fetchSearch,
  fetchSearchProductByCtg,
} from "../../redux/thunks/productThunk";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, filter } = useSelector((state) => state.product);
  const [searchValue, setsearchValue] = useState(false);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, filter]);

  async function submitSearch(e) {
    e.preventDefault();
    dispatch(fetchSearch(searchValue));
  }

  function handleChangeSearch(e) {
    setsearchValue(e.target.value);
  }

  function handleOrderInput(e) {
    e.preventDefault();
    // dispatch(getProductsByOrder(e.target.value));
  }
  function handleChangeType(e) {
    dispatch(fetchSearchProductByCtg(e.target.value));
  }

  function handleName(e) {
    e.preventDefault();
    if (filter) {
      filter.filter((f) => f.name === e.target.value);
    } else {
      dispatch(fetchSearch(e.target.value));
    }
  }
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
            <ul class="d-flex justify-content-center">
              {categories ? (
                <select onChange={handleChangeType}>
                  <option>Choose a Category</option>
                  {categories.map((type) => {
                    return (
                      // si no se le coloca un value especifico este tomara el valor mostrado como value
                      <option key={type.id}>{type.name}</option>
                    );
                  })}
                </select>
              ) : (
                "na"
              )}
            </ul>
          </div>

          <div className="col-lg-12 col-sm-6 col-12">
            <div>
              <h6 class="p-1 border-bottom fw-bold">Filter By</h6>

              <div class="d-flex justify-content-center">
                <div>
                  <form onSubmit={handleName}>
                    <input
                      className="form-control"
                      type="text"
                      placeholerder="Buscar por nombre"
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
                      id="lower"
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
