import axios from "axios";
import React, { useState, useEffect } from "react";
import { Filters, Footer } from "../../index/index";
import "../../components/Filters/Filters.css";
import "./Products.css";
import { ProductSection } from "../../index/index";
import { useProducts } from "../../index/index";

const Products = () => {

  const { productState, productDispatch, sortData, filterData } = useProducts();

  const { products, loading, filters, error } = productState;

  const {
    priceSort,
    filterByBrand,
    filterByCategory,
    filterByRating,
    filterByRange,
  } = filters;

  const getProducts = async () => {
    try {
      productDispatch({ type: "LOADING", payload: true });
      const data = await axios.get("/api/products");
      productDispatch({ type: "PRODUCTS", payload: data.data.products });
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "ERROR_MSG", payload: "" });
    } catch (err) {
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "ERROR_MSG", payload: "Loading Failed" });
    }
  };

  const sortedData = sortData(products, priceSort);

  const filteredData = filterData(
    sortedData,
    filterByBrand,
    filterByCategory,
    filterByRating,
    filterByRange
  );

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products-section">
      <input
        type="checkbox"
        name="filter-toggle"
        id="filter-toggle"
      />
      <label
        htmlFor="filter-toggle"
        className="btn filter-btn"
      >
        <span id="flex-and-center">
          <i className="fa-solid fa-arrow-down-short-wide fa-lg pr-1"></i>
          <span id="filter-btn-text"></span>
        </span>
      </label>
      <Filters products={products} />

      <ProductSection
        products={filteredData}
        isLoading={loading}
        error={error}
      />
    </div>
  );
};

export default Products;
