import axios from "axios";
import React, { useState, useEffect } from "react";
import {Filters} from '../../index/index';
import "../../components/Filters/Filters.css";
import "./Products.css";
import {ProductSection} from "../../index/index";
import { useProducts } from "../../index/index";

const Products = () => {
  const [showFilters, setShowFilters] = useState(true);

  const { productState, productDispatch, sortData, filterData } = useProducts();

  const { products, loading, filters, error } = productState;

  const {priceSort, filterByBrand, filterByCategory, filterByRating, filterByRange} = filters;

  const getProducts = async () => {
    try {
      productDispatch({ type: "LOADING", payload: true });
      const data = await axios.get("/api/products");
      productDispatch({ type: "PRODUCTS", payload: data.data.products });
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "ERROR_MSG", payload: "" });
    } catch (err) {
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "ERROR_MSG", payload: "BAD REQUEST" });
    }
  };

  const sortedData = sortData(products, priceSort)


  const filteredData = filterData(sortedData, filterByBrand, filterByCategory, filterByRating, filterByRange)

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-section">
      <Filters showFilters={showFilters} products={products} />

      <ProductSection products={filteredData} isLoading={loading} error={error} />
      <input
        type="checkbox"
        name="filter-toggle"
        id="filter-toggle"
        value={showFilters}
        onChange={(e) => setShowFilters(e.target.checked)}
      />
      <label htmlFor="filter-toggle" className="btn filter-btn">
        <span id="open-filter flex-and-center">
          <i className="fa-solid fa-arrow-down-short-wide fa-lg pr-1"></i>
          <span id="filter-btn-text">Filter</span>
        </span>
      </label>
    </div>
  );
};

export default Products;
