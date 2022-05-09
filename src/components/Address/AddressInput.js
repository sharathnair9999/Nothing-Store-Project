import React from "react";
import "./Address.css"

const AddressInput = ({ type, legend, setAddress, ...others }) => {
  const handleChange = (e) => {
    setAddress((details) => {
      return { ...details, [e.target.name]: e.target.value };
    });
  };
  return (
    <fieldset>
      <legend>{legend}</legend>
      <input type={type} {...others} onChange={handleChange} />
    </fieldset>
  );
};

export default AddressInput;
