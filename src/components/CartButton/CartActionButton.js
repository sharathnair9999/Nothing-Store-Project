import React from "react";
import { useCart } from "../../imports";

const CartActionButton = ({ inStock, isLoggedUser, inCart, product }) => {
  const { addToCart, removeFromCart } = useCart();
  return (
    <>
      {isLoggedUser ? (
        <button
          className={`${!inStock ? "secondary" : "primary"} action-btn`}
          disabled={!inStock}
          onClick={() => {
            if (inStock && inCart) {
              removeFromCart(product._id);
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
    </>
  );
};

export default CartActionButton;
