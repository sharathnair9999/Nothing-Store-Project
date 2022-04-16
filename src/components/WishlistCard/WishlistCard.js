import React from "react";
import { Link } from "react-router-dom";
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
    inStock,
  } = product;

  const { removeFromWishlist } = useWishlist();
  const {
    addToCart,
    cartState: { cartItems },
  } = useCart();
  const inCart = cartItems.find((item) => item._id === _id);

  return (
    <div className="product vertical-card">
      <div className="image-container">
        <Link to={`/products/${_id}`}>
          <img src={imgUrl} alt={title} className="card-image" />
        </Link>
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
          disabled={!inStock && inCart}
          className={`action-btn ${
            inStock && !inCart ? "primary" : "secondary"
          }`}
          onClick={() => {
            if (!inCart) {
              addToCart({ product });
              removeFromWishlist(_id);
            }
          }}
        >
          {!inStock ? "Out of Stock" : inCart ? "In Cart" : "Move To Cart"}
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
