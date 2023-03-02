import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchClearFilter,
  fetchOrderAlphabet,
  fetchOrderPrice,
  fetchOrderScore,
  fetchSearchInFilter,
  fetchSearchProductByCtg,
} from "../../redux/thunks/productThunk";
import "./Filter.css";

const Filters = ({ setCurrentPage, setInput }) => {
  const dispatch = useDispatch();
  const { categories, filter } = useSelector((state) => state.product);
  
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  function handleChangeSearch(e) {
    e.preventDefault();
    dispatch(fetchSearchInFilter(search));
    setCurrentPage(1);
    setInput(1);
  }
  
  function handleOrderAlphabet(e) {
    dispatch(fetchOrderAlphabet(e.target.value));
    setCurrentPage(1);
    setInput(1);
  }
  
  function handleOrderPrice(e) {
    dispatch(fetchOrderPrice(e.target.value));
    setCurrentPage(1);
    setInput(1);
  }
  
  function handleOrderScore(e) {
    dispatch(fetchOrderScore(e.target.value));
    setCurrentPage(1);
    setInput(1);
  }

  function handleChangeType(e) {
    dispatch(fetchSearchProductByCtg(e.target.value));
    setCurrentPage(1);
    setInput(1);
  }

  function clearFilter(e) {
    e.preventDefault();
    dispatch(fetchClearFilter());
    e.target.reset();
    setCurrentPage(1);
    setInput(1);
  }

  return (
    <div>
      <div
        id="sidebar"
        className="col-10 d-flex flex-column py-2 text-center rounded position-fixed colorletra"
      >
        <div className="row ">
          <div className="col-lg-3 col-sm-6 col-12 bg-dark rounded">
            <div class="d-flex justify-content-center">
              {filter.length ? (
                <form onSubmit={(e) => handleChangeSearch(e)}>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Search by name"
                    name="filter-by-name"
                    autoComplete="off"
                    onChange={(e) => setSearch(e.target.value)}
                    />
                  <button class="mt-1 btn btn-primary btn-sm" type="submit" >
                    search
                  </button>
                </form>
              ) : null}
              {console.log(search)}
            </div>
            <form
              onSubmit={clearFilter}
              id="form-filters-combined"
              class="ml-md-2"
            >
              <div className="col-lg-12 col-sm-6 col-12 mt-3 rounded-2 filterCategories">
                <h6 class="span-1 fw-bold">Categories</h6>
                <div>
                  {categories?.map((c) => {
                    return (
                      <div key={c._id}>
                        <input
                          type="radio"
                          name="categories"
                          value={c.name}
                          onClick={handleChangeType}
                        />
                        <label htmlFor="categories">{c.name}</label>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div class="mt-3 rounded-2 orders">
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="A-Z"
                    id="higher"
                    onClick={handleOrderAlphabet}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="Z-A"
                    id="order"
                    onClick={handleOrderAlphabet}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="higher_price"
                    id="order"
                    onClick={handleOrderScore}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;maximum score</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="lower_price"
                    id="order"
                    onClick={handleOrderPrice}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;lower price</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="higher_price"
                    id="order"
                    onClick={handleOrderPrice}
                  />

                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;higher price</label>
                </div>
              </div>
              {filter.length ? (
                <button class="btn btn-warning btn-sm" type="submit">
                  Reset Filters
                </button>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
