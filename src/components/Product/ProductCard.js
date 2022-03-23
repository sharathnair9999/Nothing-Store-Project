import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import {Rating} from "../../index/index"

const ProductCard = ({ product }) => {
  const {
    _id,
    title,
    company,
    rating,
    unitsLeft,
    price,
    inStock,
    discountPercent,
    categoryName,
    imgUrl,
  } = product;
  return (
    <div
      className={`product vertical-card`}
    >
      <div className="image-container">
        <Link to={`/products/${_id}`}>
          <img
            src={`${imgUrl}`}
            alt={title}
            loading="lazy"
            className="card-image"
          />
        </Link>
        <div className="btn-section">
          {unitsLeft < 20 && (
            <span className="flag">{`Only ${unitsLeft} left!`}</span>
          )}
          <div className="corner-btns">
            <button className="btn flex-and-center">
              <i className="fas fa-heart save"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="text-section">
        <Link to={"/"}>
          <h4>{title}</h4>
        </Link>
        <small>{company}</small>
      </div>  
        <Rating rating = {rating}/>
      <div className="rate-section">
        <span className="curr-price">{`₹ ${price.toLocaleString()}`}</span>
        <span className="mrp-price">{`₹ ${
          (price + (price * discountPercent) / 100
          ).toLocaleString()} `}</span>
        <span className="percent-off">{`(${discountPercent}% off)`}</span>
      </div>
      <div className="card-action-btns">
        {/* <button className="action-btn primary">Buy now</button> */}
        <button className={`${!inStock ? "secondary":"primary"} action-btn`} disabled={!inStock} onClick={()=>console.log("click")}>{inStock ? 'Add to Cart':"Out of Stock"}</button>
      </div>
    </div>
  );
};

export default ProductCard;
