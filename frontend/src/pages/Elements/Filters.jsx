import React, { useState } from 'react';
import './Filters.css'; // Assuming you have custom styling for this component

const Filters = () => {
  // State to store selected filters
  const [category, setCategory] = useState('All');
  const [weight, setWeight] = useState('All');

  const clearFilters = () => {
    setCategory('All');
    setWeight('All');
  };

  return (
    <div className="filter-page">
      <aside className="filters">
        <h4>Filters</h4>
        
        {/* Category Filter */}
        <div className="filter-category">
          <h5>Category</h5>
          <ul>
            <li>
              <input
                type="radio"
                name="category"
                value="All"
                checked={category === 'All'}
                onChange={() => setCategory('All')}
              />
              All
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Necklaces"
                checked={category === 'Necklaces'}
                onChange={() => setCategory('Necklaces')}
              />
              Necklaces
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Earrings"
                checked={category === 'Earrings'}
                onChange={() => setCategory('Earrings')}
              />
              Earrings
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Chains"
                checked={category === 'Chains'}
                onChange={() => setCategory('Chains')}
              />
              Chains
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Bangles"
                checked={category === 'Bangles'}
                onChange={() => setCategory('Bangles')}
              />
              Bangles
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Mangalsutras"
                checked={category === 'Mangalsutras'}
                onChange={() => setCategory('Mangalsutras')}
              />
              Mangalsutras
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="Lockets"
                checked={category === 'Lockets'}
                onChange={() => setCategory('Lockets')}
              />
              Lockets
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="SilverChains"
                checked={category === 'SilverChains'}
                onChange={() => setCategory('SilverChains')}
              />
              Silver Chains
            </li>
            <li>
              <input
                type="radio"
                name="category"
                value="SilverItems"
                checked={category === 'SilverItems'}
                onChange={() => setCategory('SilverItems')}
              />
              Silver Items
            </li>
          </ul>
        </div>

        {/* Weight Filter */}
        <div className="filter-weight">
          <h5>Weight</h5>
          <ul>
            <li>
              <input
                type="radio"
                name="weight"
                value="All"
                checked={weight === 'All'}
                onChange={() => setWeight('All')}
              />
              All
            </li>
            <li>
              <input
                type="radio"
                name="weight"
                value="1-2"
                checked={weight === '1-2'}
                onChange={() => setWeight('1-2')}
              />
              1-2 grams
            </li>
            <li>
              <input
                type="radio"
                name="weight"
                value="2-3"
                checked={weight === '2-3'}
                onChange={() => setWeight('2-3')}
              />
              2-3 grams
            </li>
            <li>
              <input
                type="radio"
                name="weight"
                value="3-4"
                checked={weight === '3-4'}
                onChange={() => setWeight('3-4')}
              />
              3-4 grams
            </li>
            <li>
              <input
                type="radio"
                name="weight"
                value="4-5"
                checked={weight === '4-5'}
                onChange={() => setWeight('4-5')}
              />
              4-5 grams
            </li>
            <li>
              <input
                type="radio"
                name="weight"
                value="5+"
                checked={weight === '5+'}
                onChange={() => setWeight('5+')}
              />
              5 grams & above
            </li>
          </ul>
        </div>

        {/* Clear Filters Button */}
        <button className="clear-filters" onClick={clearFilters}>
          Clear All Filters
        </button>
      </aside>

      {/* Product Listing - To be implemented with JSON data later */}
      <section className="product-list">
        <h2>Showing products</h2>
        {/* You will map over the products JSON here based on the filters */}
        <div className="product-grid">
          {/* Product components will go here */}
        </div>
      </section>
    </div>
  );
};

export default Filters;
