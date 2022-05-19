import React from "react";
import {
  CartCard,
  CartSummary,
  EmptyData,
  useCart,
  constants,
} from "../../imports/index";
import "./Cart.css";

const Cart = () => {
  const {
    cartState: { cartItems },
    cartPriceSummary,
  } = useCart();

  const currSummary = cartPriceSummary(cartItems);
  return (
    <div>
      <header className="flex justify-fs items-center gap-1">
        <p className="cart-header">
          <span className="blue">C</span>
          <span className="black">art&nbsp;</span>
        </p>
        <span className="count">Total Items - {currSummary.totalQty}</span>
      </header>
      <div className="cart-container flex gap-2">
        <div className="cart-items flex flex-col justify-center items-center gap-2 mt-1 w-100">
          {currSummary.totalQty > 0 ? (
            cartItems.map((item) => <CartCard key={item._id} product={item} />)
          ) : (
            <EmptyData
              message={"Nothing in your Cart yet!"}
              imgUrl={constants.empty_cart}
            />
          )}
        </div>
        {cartItems.length > 0 && <CartSummary currSummary={currSummary} />}
      </div>
    </div>
  );
};

export default Cart;
