import React from "react";
import "./ProductsSection.css";

const EmptyData = ({message , imgUrl}) => {
  return (
    <div className="empty-data-section">
      <img
        src={imgUrl}
        alt="Error Image"
      />  
      <h3>{message}</h3>
    </div>
  );
};

export default EmptyData;
