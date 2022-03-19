import React from "react";

const Heading = ({ text }) => {
  return (
    <div className="line-behind">
      <span></span>
      <h3>{text}</h3>
    </div>
  );
};

export default Heading;
