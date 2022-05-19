import React from "react";

const CheckoutCard = ({ sNo, item }) => {
  return (
    <div className="checkout-card flex justify-space-btw items-center gap-sm">
      <span>{sNo}</span>
      <img className="cart-image" src={item.imgUrl} alt={item.title} />
      <section>
        <p>{item.title}</p>
        <p>{`Qty : ${item.qty}`}</p>
      </section>
    </div>
  );
};

export default CheckoutCard;
