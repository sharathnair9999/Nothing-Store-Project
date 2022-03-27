import React from 'react'

const ProductRate = ({price, discountPercent}) => {
  return (
    <div className="rate-section">
        <span className="curr-price">{`₹ ${price.toLocaleString()}`}</span>
        <span className="mrp-price">{`₹ ${(
          price +
          (price * discountPercent) / 100
        ).toLocaleString()} `}</span>
        <span className="percent-off">{`(${discountPercent}% off)`}</span>
      </div>
  )
}

export default ProductRate