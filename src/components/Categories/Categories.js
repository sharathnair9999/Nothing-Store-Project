import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";

const Categories = () => {
  const categoryURLs = [
    {
      category: "Phones",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647439297/nothing-store-project/phone_wznqan.jpg",
    },
    {
      category: "Desktops",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647439382/nothing-store-project/desktop_zqwap1.jpg",
    },
    {
      category: "Laptops",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647439379/nothing-store-project/laptop_hlcvqj.jpg",
    },
    {
      category: "Audio",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647439381/nothing-store-project/headphones_n7sbey.jpg",
    },
    {
      category: "Accessories",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647439384/nothing-store-project/accessories_mrs1mj.jpg",
    },
  ];
  return (
    <div>
     <Heading text={"Categories"}/>
      <div className="categories-container flex-and-center">
        {categoryURLs.map(({category, url}) => {
          return (
            <div key={category} className="category flex-and-center phone">
              <img
                src={url}
                alt={category}
                className="category-image"
              />
              <div className="category-text-overlay flex-and-center">
                <Link to={`/`}>{category}</Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
