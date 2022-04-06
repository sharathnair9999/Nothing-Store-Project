import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import {
  Rating,
  useCart,
  userDetails,
  ProductRate,
  useWishlist,
} from "../../index/index";

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
    imgUrl,
  } = product;

  const navigate = useNavigate();

  const { isLoggedUser } = userDetails();
  const { addToCart, removeFromCart, productInCart } = useCart();
  const { addToWishlist, removeFromWishlist, productInWishlist } = useWishlist();
  const inWishlist = productInWishlist(product);
  const inCart = productInCart(product);

  return (
    <div className={`product ${isLoggedUser && inWishlist && "saved"} vertical-card`}>
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
            {isLoggedUser ? (
              <button
                className="btn flex-and-center"
                onClick={() => {
                  inWishlist
                    ? removeFromWishlist(_id)
                    : addToWishlist({ product });
                }}
              >
                <i className="fas fa-heart save"></i>
              </button>
            ) : (
              <button
                className="btn flex-and-center"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i className="fas fa-heart save"></i>
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="text-section">
        <Link to={`/products/${_id}`}>
          <h4>{title}</h4>
        </Link>
        <small>{company}</small>
      </div>
      <Rating rating={rating} />
      <ProductRate price={price} discountPercent={discountPercent} />
      <div className="card-action-btns">
        {isLoggedUser ? (
          <button
            className={`${!inStock ? "secondary" : "primary"} action-btn`}
            disabled={!inStock}
            onClick={() => {
              if (inStock && inCart) {
                removeFromCart(_id);
              } else if (inStock && !inCart) {
                addToCart({ product });
              }
            }}
          >
            {!inCart
              ? !inStock
                ? "Out of Stock"
                : "Add to Cart"
              : "Remove from Cart"}
          </button>
        ) : (
          <button
            disabled={!inStock}
            onClick={() => navigate("/login")}
            className={`${!inStock ? "secondary" : "primary"} action-btn`}
          >
            {!inStock ? (
              "Out of Stock"
            ) : (
              <span>
                Sign In to <i className="fa-solid fa-cart-shopping"></i>
              </span>
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
