import React from "react";

const CheckoutCard = ({ sNo, item }) => {
  return (
    <div className="checkout-card flex justify-fs items-center gap-sm">
      <span>{sNo}</span>
      <img className="cart-image" src={item.imgUrl} alt={item.title} />
      <section className="product-info">
        <p>{item.title}</p>
        <p>{`Qty : ${item.qty}`}</p>
        <p>{`Price : ₹ ${item.price.toLocaleString()}`}</p>
      </section>
    </div>
  );
};

export default CheckoutCard;
