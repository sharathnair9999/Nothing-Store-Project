import React from "react";
import { CartCard, CartSummary, useCart } from "../../index/index";
import "./Cart.css";

const Cart = () => {

  const {cartState , cartPriceSummary} = useCart()
  const {cartItems} = cartState

  const currSummary = cartPriceSummary(cartItems)
  return (
    <div>
      <header className="flex-and-center gap-2">
        <p className="cart-header">
          <span className="blue">C</span>
          <span className="black">art&nbsp;</span>
        </p>
        <span className="count">Total Items - {cartItems?.length}</span>
      </header>
      <div className="cart-container flex gap-2">
        <div className="cart-items flex flex-col gap-2 mt-1 w-100">
          {cartItems?.map((item)=> <CartCard key={item._id} item={item} />  )}                                                        
        </div>
       <CartSummary cartItems={cartItems} currSummary={currSummary}/>
      </div>
    </div>
  );
};

export default Cart;
