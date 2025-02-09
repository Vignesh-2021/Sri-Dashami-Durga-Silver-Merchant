import React from 'react'
import './RatingStars.css'

const RatingStars = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`ri-star${i <= rating ? '-fill' : '-line'}`}></span>
    );
  }
  return (
    <div className='product_rating'>
      {stars}
    </div>
  );
}

export default RatingStars;
