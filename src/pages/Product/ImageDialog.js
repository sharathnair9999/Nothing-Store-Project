import React from "react";
import "./Product.css";

const ImageDialog = ({ setOpenDialog, img, openDialog }) => {
  return (
    <div
      className={`image-modal flex-and-center flex-col ${
        openDialog ? "show" : "hide"
      } `}
      onClick={(e) => setOpenDialog(false)}
    >
      <div className="relative">
        <img src={img} alt="test" onClick={(e) => e.stopPropagation()} />

        <i
          onClick={() => setOpenDialog(false)}
          className="fa-solid close-modal fa-xmark fa-2xl"
        ></i>
      </div>
    </div>
  );
};

export default ImageDialog;
