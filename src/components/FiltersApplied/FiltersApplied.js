import React from "react";
import "./FiltersApplied.css";

const FiltersApplied = ({ products }) => {
  return (
    <div className="wrap gap-1 flex-and-center p-sm">
      <span>
        <b>Showing - </b> <span>{`${products.length} Results`}</span>
      </span>
    </div>
  );
};

export default FiltersApplied;
