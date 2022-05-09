import React from "react";
import "./Address.css";

const AddressInput = ({ type, legend, setAddress, ...others }) => {
  const handleChange = (e) => {
    setAddress((details) => {
      return { ...details, [e.target.name]: e.target.value };
    });
  };
  return (
    <fieldset className="input-fieldset">
      <legend className="input-legend">{legend}</legend>
      <input
        className="address-input"
        type={type}
        {...others}
        onChange={handleChange}
      />
    </fieldset>
  );
};

export default AddressInput;
