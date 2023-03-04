import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchProducts,
  fetchCategories,
} from "../../redux/thunks/productThunk";
import "./Filter.css";

const Filters = ({ setCurrentPage, setInput }) => {
  const dispatch = useDispatch();
  const { categories, filters, order, page } = useSelector(
    (state) => state.product
  );

  const [search, setSearch] = useState("");
  useEffect(() => setSearch(filters.name || ""), [filters]);

  useEffect(() => {
    if (!categories.length) {
      dispatch(fetchCategories());
    }
  }, [dispatch]);

  function handleChangeSearch(e) {
    e.preventDefault();
    dispatch(
      fetchProducts({
        filters: { ...filters, name: search },
        order,
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderAlphabet(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "name",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderPrice(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "price",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderTopViews(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "visits",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleOrderScore(e) {
    dispatch(
      fetchProducts({
        filters,
        order: {
          by: "score",
          direction: e.target.value,
        },
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function handleChangeType(e) {
    const category = e.target.value;
    const prevCategories = (filters && filters.categories) || [];
    const newCategories = prevCategories.includes(category)
      ? prevCategories.filter((category) => category !== category)
      : prevCategories.concat(category);
    dispatch(
      fetchProducts({
        filters: {
          ...filters,
          categories: newCategories,
        },
        order,
        page,
      })
    );
    setCurrentPage(1);
    setInput(1);
  }

  function clearFilter(e) {
    e.preventDefault();
    dispatch(
      fetchProducts({
        filters: {},
        order: {},
        page,
      })
    );
    e.target.reset();
    setCurrentPage(1);
    setInput(1);
  }

  return (
    <div>
      <div
        id="sidebar"
        className="col-10 d-flex flex-column py-2 text-center rounded colorletra"
      >
        <div className="row ">
          <div className="bg-dark rounded">
            <div class="d-flex justify-content-center">
              <form onSubmit={(e) => handleChangeSearch(e)}>
                <input
                  className="input-filter"
                  type="text"
                  placeholder="Search by name"
                  name="filter-by-name"
                  autoComplete="off"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <button class="mt-1 btn btn-primary btn-sm" type="submit">
                  search
                </button>
              </form>
            </div>
            <form
              onSubmit={clearFilter}
              id="form-filters-combined"
              class="ml-md-2"
            >
              <div className="mt-3 rounded-2 filterCategories">
                <h6 class="span-1 fw-bold">Categories</h6>
                <div>
                  {categories?.map((c) => {
                    return (
                      <div key={c._id}>
                        <input
                          type="checkbox"
                          name="categories"
                          value={c.name}
                          checked={
                            filters &&
                            filters.categories &&
                            filters.categories.includes(c.name)
                          }
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
                    value="asc"
                    id="higher"
                    onClick={handleOrderAlphabet}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;A-Z</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="order"
                    onClick={handleOrderAlphabet}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;Z-A</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="order"
                    onClick={handleOrderScore}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;maximum score</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="asc"
                    id="order"
                    onClick={handleOrderPrice}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;lower price</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    value="desc"
                    id="order"
                    onClick={handleOrderPrice}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;higher price</label>
                </div>
                <div class="form-inline border rounded span-sm-2 my-2">
                  <input
                    type="radio"
                    name="type"
                    id="order"
                    value="desc"
                    onClick={handleOrderTopViews}
                  />
                  <label class="pl-1 pt-sm-0 pt-1">&nbsp;higher views</label>
                </div>
              </div>
              <button class="btn btn-warning btn-sm mb-2" type="submit">
                Reset Filters
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;
