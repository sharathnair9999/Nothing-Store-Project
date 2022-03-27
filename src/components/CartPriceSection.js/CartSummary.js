import React from 'react'

const CartSummary = ({cartItems, currSummary}) => {

  const { cartPrice,
    totalDiscount,
    deliveryCharges,
    finalTotal} = currSummary



  return (
    <div className="price-details flex flex-col gap-1 mt-1">
    <h4>Price Details</h4>
    <hr />
    <section className="flex">
      <span>Price ({cartItems?.length} Items)</span>
      <span className="price">{`₹ ${cartPrice ? cartPrice.toLocaleString():0} `}</span>
    </section>
    <section className="flex">
      <span>Discount</span>
      <span className="price">{`-₹ ${totalDiscount ? totalDiscount.toLocaleString():0}`}</span>
    </section>
    <section className="flex">
      <span>Delivery Charges</span>
      <span className="price">{`₹ ${deliveryCharges}`}</span>
    </section>
    <hr />
    <section className="flex">
      <b>TOTAL AMOUNT</b>
      <b className="price">{`₹ ${finalTotal ? finalTotal.toLocaleString():0}`}</b>
    </section>
    <hr />
    <button className="btn btn-primary">Place Order</button>
  </div>
  )
}

export default CartSummary