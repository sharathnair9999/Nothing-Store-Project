import React from 'react'

const Rating = ({rating}) => {
  return (
    <div className="rating-section">
    {[...Array(5)].map((_, id) => (
      <i
        key={id}
        className={`fas fa-star ${id < rating && "checked"} `}
      ></i>
    ))}
  </div>
  )
}

export default Rating