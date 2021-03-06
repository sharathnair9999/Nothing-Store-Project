import axios from "axios";
import React, { useEffect } from "react";
import { Filters } from "../../imports/index";
import "../../components/Filters/Filters.css";
import "./Products.css";
import { ProductSection } from "../../imports/index";
import { useProducts } from "../../imports/index";
import { useLocation } from "react-router-dom";

const Products = () => {
  const { productState, productDispatch, sortData, filterData } = useProducts();
  const { pathname } = useLocation();

  const { products, searchedProducts, loading, filters, error } = productState;

  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  const {
    priceSort,
    filterByBrand,
    filterByCategory,
    filterByRating,
    filterByRange,
    filterByStock,
  } = filters;

  const getProducts = async () => {
    try {
      productDispatch({ type: "LOADING", payload: true });
      const data = await axios.get("/api/products");
      productDispatch({ type: "PRODUCTS", payload: data.data.products });
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "SHOW_ALERT", payload: "" });
    } catch (err) {
      productDispatch({ type: "LOADING", payload: false });
      productDispatch({ type: "SHOW_ALERT", payload: "Loading Failed" });
    }
  };

  let actualProducts =
    searchedProducts.length > 0 ? searchedProducts : products;

  const sortedData = sortData(actualProducts, priceSort);

  const filteredData = filterData(
    sortedData,
    filterByBrand,
    filterByCategory,
    filterByRating,
    filterByRange,
    filterByStock
  );

  useEffect(() => {
    productState?.products?.length === 0 && getProducts();
    return () => (actualProducts = products);
  }, []);

  return (
    <div className="products-section">
      <input type="checkbox" name="filter-toggle" id="filter-toggle" />
      <label htmlFor="filter-toggle" className="btn filter-btn">
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
