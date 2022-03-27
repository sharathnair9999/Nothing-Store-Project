import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { Rating, useCart, userDetails, ProductRate } from "../../index/index";

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
  const { addToCart, cartState, removeFromCart } = useCart();
  const productInCart = (prod) => {
    let prodInCart = cartState.cartItems.find((item) => item._id === prod._id);
    if (prodInCart) return true;
    return false;
  };

  const inCart = productInCart(product);

  return (
    <div className={`product vertical-card`}>
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
        <Link to={`/products/${_id}`}>
          <h4>{title}</h4>
        </Link>
        <small>{company}</small>
      </div>
      <Rating rating={rating} />
     <ProductRate price={price} discountPercent={discountPercent} />
      <div className="card-action-btns">
        {/* <button className="action-btn primary">Buy now</button> */}

        {/* {encoded} */}

        {isLoggedUser ? (
          <button
            className={`${!inStock ? "secondary" : "primary"} action-btn`}
            disabled={!inStock}
            onClick={() => {
              if (inStock && inCart) {
                console.log("remove");
                removeFromCart(_id);
              } else if (inStock && !inCart) {
                console.log("add");
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
            {!inStock
              ? "Out of Stock"
              : <span>Sign In to <i className="fa-solid fa-cart-shopping"></i></span> }
          </button>
        )}
       
      </div>
    </div>
  );
};

export default ProductCard;
