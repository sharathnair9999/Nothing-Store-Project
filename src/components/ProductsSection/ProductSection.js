import React from "react";
import { FiltersApplied } from "../../imports/index";
import { ProductCard } from "../../imports/index";
import EmptyData from "./EmptyData";
import "./ProductsSection.css";
import { Loader } from "../../imports/index";

const ProductSection = ({ products, isLoading, error }) => {
  return (
    <div className={`flex-and-center w-100 products-wrapper`}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="flex-and-center w-100 flex-col py-1">
          <FiltersApplied products={products} />
          {error ? (
            <EmptyData
              message={"That's a Bad Request. Please check after sometime"}
              imgUrl={
                "https://res.cloudinary.com/sharath-media-library/image/upload/v1647633989/nothing-store-project/error_page_ok688r.svg"
              }
            />
          ) : products.length > 0 ? (
            <div
              className={`products-container grid gap-sm py-1 ${
                !isLoading && "show-products"
              }`}
            >
              {products.map((product) => {
                return <ProductCard key={product._id} product={product} />;
              })}
            </div>
          ) : (
            <EmptyData
              message={
                "No Products available on that filters currently. See you around!"
              }
              imgUrl={
                "https://res.cloudinary.com/sharath-media-library/image/upload/v1647631255/nothing-store-project/empty_data_r69ppl.svg"
              }
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ProductSection;
