import React from "react";
import { Link } from "react-router-dom";
import { Rating, ProductRate, useCart } from "../../index/index";

const CartCard = ({ item }) => {
  const { removeFromCart, changeQty } = useCart();
  const { _id, rating, title, imgUrl, price, discountPercent, qty } = item;
  return (
    <div className="product horizontal-card cart-card w-100">
      <div className="card-body flex">
        <Link to={`/products/${_id}`}>
          <img src={imgUrl} alt={title} className="horizontal-img" />
        </Link>
        <div className="card-texts">
          <div className="text-section">
            <h4>{title}</h4>
          </div>
          <Rating rating={rating} />
          <ProductRate price={price} discountPercent={discountPercent} />
          <div className="qty-section flex-col">
            <span>Quantity: </span>
            <div className="flex qty-btn-section">
              <button
                className="qty-btn flex-and-center"
                onClick={() => {
                  changeQty(_id, "decrement");
                }}
              >
                -
              </button>
              <span className="qty-input">{qty}</span>
              <button
                className="qty-btn flex-and-center "
                onClick={() => changeQty(_id, "increment")}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="card-action-btns flex">
        <button
          className="action-btn primary"
          onClick={() => {
            removeFromCart(_id);
          }}
        >
          Remove from Cart
        </button>
        <button className="action-btn secondary">Move to wishlist</button>
      </div>
    </div>
  );
};

export default CartCard;
