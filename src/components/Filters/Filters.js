import React from "react";
import { useProducts } from "../../contexts/Products/product-context";
import "./Filters.css";

const Filters = ({ products }) => {
  const { productState, productDispatch } = useProducts();

  const { filters } = productState;

  const {
    priceSort,
    filterByBrand,
    filterByCategory,
    filterByRating,
    filterByRange,
    filterByStock,
  } = filters;

  const uniqueElements = (value, index, self) => {
    return self.indexOf(value) === index;
  };

  const categories = products
    .map((product) => product.categoryName)
    .filter(uniqueElements);

  const brands = products
    .map((product) => product.company)
    .filter(uniqueElements);

  return (
    <aside className={`filter-section sticky p-1 top-0`}>
      <div className="flex-and-center">
        <h3 className="property-header">Filter</h3>
        <span
          className=" clear-btn pointer btn p-sm"
          onClick={() => productDispatch({ type: "RESET_FILTERS" })}
        >
          Clear
        </span>
      </div>
      <section className="pt-1">
        <section className="flex justify-space-btw items-center w-100">
          <h4 className="property-header">Price</h4>
          <p>{`${filterByRange} - 500000`}</p>
        </section>
        <input
          type="range"
          name="price-filter"
          id="price-filter"
          min={2000}
          max={499000}
          step={500}
          value={filterByRange}
          onChange={(e) =>
            productDispatch({
              type: "FILTER_BY_RANGE",
              payload: e.target.value,
            })
          }
        />
      </section>
      <section className="w-100 checkbox">
        <label
          className="w-100 flex justify-space-btw items-center"
          htmlFor="stock-filter"
        >
          <input
            type="checkbox"
            name="filterByStock"
            checked={filterByStock}
            onChange={(e) =>
              productDispatch({
                type: "FILTER_BY_STOCK",
                payload: e.target.checked,
              })
            }
            id="stock-filter"
          />
          <span>Include Out Of Stock</span>
        </label>
      </section>
      <section>
        <h4 className="property-header">Category</h4>
        {categories.map((category) => (
          <div key={category} className="checkbox">
            <input
              type="checkbox"
              id={category}
              value={category}
              checked={filterByCategory.includes(category)}
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: category,
                });
              }}
            />
            <label htmlFor={category}>{category}</label>
          </div>
        ))}
      </section>
      <section>
        <h4 className="property-header">Brand</h4>
        {brands.map((brand) => (
          <div key={brand} className="checkbox">
            <input
              type="checkbox"
              id={brand}
              value={brand}
              checked={filterByBrand.includes(brand)}
              onChange={() => {
                productDispatch({ type: "FILTER_BY_BRAND", payload: brand });
              }}
            />
            <label htmlFor={brand}>{brand}</label>
          </div>
        ))}
      </section>
      <section>
        <h4 className="property-header">Ratings</h4>
        {[...Array(4)].map((_, id) => (
          <div key={id} className="radio">
            <input
              type="radio"
              id={id}
              name="rating-filter"
              value={4 - id}
              checked={Number(filterByRating) === Number(4 - id)}
              onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_RATING",
                  payload: Number(4 - id),
                });
              }}
            />
            <label htmlFor={id}>{`${4 - id} star & above`}</label>
          </div>
        ))}
      </section>
      <section>
        <h4 className="property-header">Sort By</h4>
        <div className="radio">
          <input
            type="radio"
            id="radio5"
            name="sort-by-price"
            value={"LOW_TO_HIGH"}
            checked={priceSort === "LOW_TO_HIGH"}
            onChange={(e) =>
              productDispatch({ type: "PRICE_SORT", payload: e.target.value })
            }
          />
          <label htmlFor="radio5">Price - Low to High</label>
        </div>
        <div className="radio">
          <input
            type="radio"
            id="radio6"
            name="sort-by-price"
            value={"HIGH_TO_LOW"}
            checked={priceSort === "HIGH_TO_LOW"}
            onChange={(e) =>
              productDispatch({ type: "PRICE_SORT", payload: e.target.value })
            }
          />
          <label htmlFor="radio6">Price - High to Low</label>
        </div>
      </section>
    </aside>
  );
};

export default Filters;
