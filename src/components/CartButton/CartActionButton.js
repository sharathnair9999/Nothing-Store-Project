import React from "react";
import { useCart } from "../../imports";

const CartActionButton = ({ inStock, isLoggedUser, inCart, product }) => {
  const { addToCart, removeFromCart } = useCart();
  const [cartAction, setCartAction] = React.useState(false);
  const cartHandler = async () => {
    if (inStock && inCart) {
      setCartAction(true);
      await removeFromCart(product._id);
      setCartAction(false);
    } else if (inStock && !inCart) {
      setCartAction(true);
      addToCart({ product });
      setCartAction(false);
    }
  };
  return (
    <>
      {isLoggedUser ? (
        <button
          className={`${!inStock ? "secondary" : "primary"} action-btn`}
          disabled={!inStock || cartAction}
          onClick={cartHandler}
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
