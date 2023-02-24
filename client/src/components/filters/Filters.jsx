import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchClearFilter,
  fetchOrderAlphabet,
  fetchOrderAlphabeth,
  fetchOrderInFilter,
  fetchOrderPrice,
  fetchOrderScore,
  fetchSearchInFilter,
  fetchSearchProductByCtg,
} from "../../redux/thunks/productThunk";
import "./Filter.css";

const Filters = () => {
  const dispatch = useDispatch();
  const { categories, filter } = useSelector((state) => state.product);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch, filter.length]);

  function handleChangeSearch(e) {
    e.preventDefault();
    dispatch(fetchSearchInFilter(search));
  }

  function handleOrderAlphabet(e) {
    dispatch(fetchOrderAlphabet(e.target.value));
  }

  function handleOrderPrice(e) {
    dispatch(fetchOrderPrice(e.target.value));
  }

  function handleOrderScore(e) {
    dispatch(fetchOrderScore(e.target.value));
  }

  function handleChangeType(e) {
    dispatch(fetchSearchProductByCtg(e.target.value));
  }

  function clearFilter(e) {
    e.preventDefault();
    dispatch(fetchClearFilter());
    e.target.reset();
  }

  return (
    <div>
      <div
        id="sidebar"
        className="col-12 d-flex flex-column border max-height-sidebar py-2 text-center rounded mb-4 contenedor-filtros"
      >
        <div className="row">
          <div className="col-lg-12 col-sm-6 col-12">
            <div class="d-flex justify-content-center">
              <form onSubmit={(e) => handleChangeSearch(e)}>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search by name"
                  name="filter-by-name"
                  autoComplete="off"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button type="submit">search</button>
              </form>
            </div>
            <form onSubmit={clearFilter} class="ml-md-2">
              <div className="col-lg-12 col-sm-6 col-12">
                <h6 class="span-1 fw-bold">Categories</h6>
                <div>
                  {categories?.map((c) => {
                    return (
                      <div key={c._id}>
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
              <div class="form-inline border rounded span-sm-2 my-2">
                <input
                  type="radio"
                  name="type"
                  value="A-Z"
                  id="higher"
                  onChange={handleOrderAlphabet}
                />
                <label class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
              </div>
              <div class="form-inline border rounded span-sm-2 my-2">
                <input
                  type="radio"
                  name="type"
                  value="Z-A"
                  id="order"
                  onChange={handleOrderAlphabet}
                />
                <label class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
              </div>
              <div class="form-inline border rounded span-sm-2 my-2">
                <input
                  type="radio"
                  name="type"
                  value="lower_price"
                  id="order"
                  onChange={handleOrderPrice}
                />
                <label class="pl-1 pt-sm-0 pt-1">&nbsp;lower price</label>
              </div>

              <div class="form-inline border rounded span-sm-2 my-2">
                <input
                  type="radio"
                  name="type"
                  value="higher_price"
                  id="order"
                  onChange={handleOrderPrice}
                />

                <label class="pl-1 pt-sm-0 pt-1">&nbsp;maximum score</label>
              </div>
              <div class="form-inline border rounded span-sm-2 my-2">
                <input
                  type="radio"
                  name="type"
                  value="maximum_score"
                  id="order"
                  onChange={handleOrderScore}
                />

                <label class="pl-1 pt-sm-0 pt-1">&nbsp;higher price</label>
              </div>
              <button type="submit">Reset Filters</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
