import React from "react";
import "./ProductsSection.css";

const EmptyData = ({message , imgUrl }) => {
  return (
    <div className="empty-data-section">
      <img
        src={imgUrl || "https://res.cloudinary.com/sharath-media-library/image/upload/v1647631255/nothing-store-project/empty_data_r69ppl.svg"}
        alt="Error Image"
      />  
      <h3>{message}</h3>
    </div>
  );
};

export default EmptyData;
