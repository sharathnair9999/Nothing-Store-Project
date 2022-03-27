import React from 'react'
import {Rating, ProductRate} from '../../index/index'

const CartCard = ({item}) => {
  const {_id, rating, title, imgUrl, price, discountPercent, qty} = item
  return (
    <div className="product horizontal-card cart-card">
    <div className="card-body flex">
      <img
        src={imgUrl}
        alt={title}
        className="horizontal-img"
      />
      <div className="card-texts">
        <div className="text-section">
          <h4>{title}</h4>
        </div>
        <Rating rating={rating}/>
        <ProductRate price={price} discountPercent={discountPercent}/>
        <div className="qty-section flex-col">
          <span>Quantity: </span>
          <div className="flex qty-btn-section">
            <button className="qty-btn flex-and-center">-</button>
            <span className="qty-input">{qty}</span>
            <button className="qty-btn flex-and-center ">+</button>
          </div>
        </div>
      </div>
    </div>
    <div className="card-action-btns flex">
      <button className="action-btn primary">Remove from Cart</button>
      <button className="action-btn secondary">Move to wishlist</button>
    </div>
  </div>
  )
}

export default CartCard