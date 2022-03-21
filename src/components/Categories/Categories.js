import React from "react";
import { Link } from "react-router-dom";
import Heading from "../Heading";

const Categories = () => {
  const categoryURLs = [
    {
      category: "Phones",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647877224/nothing-store-project/phone-min1_eya8h3.jpg",
    },
    {
      category: "Desktops",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647877097/nothing-store-project/laptop-min_towiqk.jpg",
    },
    {
      category: "Laptops",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647875506/nothing-store-project/laptop-min_rte74b.jpg",
    },
    {
      category: "Audio",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647522801/nothing-store-project/sony-xm4_b534or.png",
    },
    {
      category: "Accessories",
      url: "https://res.cloudinary.com/sharath-media-library/image/upload/v1647875631/nothing-store-project/accessories_igz18f.jpg",
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
