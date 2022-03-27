import React from "react";
import { Rating, ProductRate, useWishlist, useCart } from "../../index/index";

const WishlistCard = ({ product }) => {
  const {
    _id,
    title,
    company,
    rating,
    price,
    discountPercent,
    imgUrl,
  } = product;

  const { removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  return (
    <div className="product vertical-card">
      <div className="image-container">
        <img src={imgUrl} alt={title} className="card-image" />
        <div className="corner-btns">
          <button
            className="btn flex-and-center"
            onClick={() => {
              removeFromWishlist(_id);
            }}
          >
            <i className="fas fa-heart save"></i>
          </button>
        </div>
      </div>
      <div className="text-section">
        <h4>{title}</h4>
        <small>{company}</small>
      </div>
      <Rating rating={rating} />
      <ProductRate price={price} discountPercent={discountPercent} />
      <div className="card-action-btns">
        <button
          className="action-btn primary"
          onClick={() => {
            addToCart({ product });
            removeFromWishlist(_id);
          }}
        >
          Move to Cart
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
