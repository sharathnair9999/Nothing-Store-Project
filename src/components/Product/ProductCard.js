import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

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
    inWishlist,
  } = product;
  return (
    <div
      className={`product ${
        inStock ? "vertical-card" : "vertical-card-text-overlay flex"
      } ${inWishlist && "saved"}`}
    >
      <div className="image-container">
        <Link to={`/`}>
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
      <div className="rating-section">
        {[...Array(5)].map((_, id) => (
          <i
            key={id}
            className={`fas fa-star ${id < rating && "checked"} `}
          ></i>
        ))}
      </div>
      <div className="rate-section">
        <span className="curr-price">{`₹ ${price.toLocaleString()}`}</span>
        <span className="mrp-price">{`₹ ${
          (price + (price * discountPercent) / 100
          ).toLocaleString()} `}</span>
        <span className="percent-off">{`(${discountPercent}% off)`}</span>
      </div>
      <div className="card-action-btns">
        {/* <button className="action-btn primary">Buy now</button> */}
        <button className="action-btn primary">Add to Cart</button>
      </div>
      {!inStock && <div className="text-overlay-section flex-and-center"><span className="text">Sold Out!</span></div>}
    </div>
  );
};

export default ProductCard;
