import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../imports/index";
import Heading from "../Heading";

const Categories = () => {
  const {
    productDispatch,
    productState: { categories },
  } = useProducts();


  return (
    <div>
      <Heading text={"Categories"} />
      <div className="categories-container flex-and-center">
        {categories?.map(({ categoryName, url }) => {
          return (
            <div key={categoryName} className="category flex-and-center phone">
              <img src={url} alt={categoryName} className="category-image" />
              <div className="category-text-overlay flex-and-center">
                <Link
                  to={`/products`}
                  onClick={() => {
                    productDispatch({
                      type: "FILTER_BY_CATEGORY",
                      payload: categoryName,
                    });
                  }}
                >
                  {categoryName}
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
