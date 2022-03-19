import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useProducts } from "../contexts/product-context";

const Products = () => {
  const { products } = useProducts();
  console.log("products",products);
  return (
    <>
    <div>
      <h3>Products Page</h3>
      {products.map(({ id, name }) => {
        return  <Link key={id} to={`/products/${id}`}>{name} | </Link>
        
      })}
      <br />
      <Link to={"/"}>Back to home</Link>
    </div>
    </>
  );
};

export default Products;
