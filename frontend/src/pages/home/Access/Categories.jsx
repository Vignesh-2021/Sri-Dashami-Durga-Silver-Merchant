import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../../assets/assets';

const Categories = () => {
  const categories = [
    { name: 'Earrings', path: 'earrings', image: assets.logo2 },
    { name: 'Necklaces', path: 'necklaces', image: assets.logo2 },
    { name: 'Chains', path: 'chains', image: assets.logo2 },
    { name: 'Rings', path: 'rings', image: assets.logo2 },
    { name: 'Bangles', path: 'bangles', image: assets.logo2 },
    { name: 'Mangalsutras', path: 'mangalsutras', image: assets.logo2 },
    { name: 'Lockets', path: 'lockets', image: assets.logo2 },
    { name: 'Silver', path: 'silver', image: assets.logo2 }
  ];

  return (
    <>
      <div className='card-container'>
      {categories.map((category) => (
  <Link to={`/categories/${category.path}`} className='card' key={category.name}>
    <img src={category.image} alt={category.name} />
    <div className="card-content">
      <h3>{category.name}</h3>
      <span className='btn'>
        Explore More
      </span>
    </div>
  </Link>
))}

      </div>

      <div className='explore-design1'>
        <h1>Shine brighter with our collection.</h1>
        <p className='explore-design-text1'>Elevate Your Style with Every Sparkle.</p>
        <img src={assets.header2} alt="" />
      </div>
    </>
  );
}

export default Categories;
