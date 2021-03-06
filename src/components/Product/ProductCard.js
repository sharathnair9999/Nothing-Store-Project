import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import {
  Rating,
  useCart,
  userDetails,
  ProductRate,
  useWishlist,
  useProducts,
} from "../../imports/index";
import CartActionButton from "../CartButton/CartActionButton";

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
  const { sendProduct } = useProducts();
  const { isLoggedUser } = userDetails();
  const { productInCart } = useCart();
  const { addToWishlist, removeFromWishlist, productInWishlist } =
    useWishlist();
  const inWishlist = productInWishlist(product);
  const inCart = productInCart(product);
  const [wishlistHandler, setWishlistHandler] = useState(false);

  const wishListHandler = async () => {
    if (inWishlist) {
      setWishlistHandler(true);
      await removeFromWishlist(_id);
      setWishlistHandler(false);
    } else {
      setWishlistHandler(true);
      addToWishlist({ product });
      setWishlistHandler(false);
    }
  };

  return (
    <div
      className={`product ${
        isLoggedUser && inWishlist && "saved"
      } vertical-card`}
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
            {isLoggedUser ? (
              <button className="btn flex-and-center" onClick={wishListHandler}>
                <i className="fas fa-heart save"></i>
              </button>
            ) : (
              <button
                disabled={wishlistHandler}
                className="btn flex-and-center"
                onClick={() => {
                  navigate("/login");
                }}
              >
                <i className="fas fa-heart save"></i>
              </button>
            )}
            <button
              className="btn flex-and-center"
              onClick={() => {
                sendProduct(_id);
              }}
            >
              <i className="fas fa-share send"></i>
            </button>
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
        <CartActionButton
          isLoggedUser={isLoggedUser}
          inStock={inStock}
          inCart={inCart}
          product={product}
        />
      </div>
    </div>
  );
};

export default ProductCard;
