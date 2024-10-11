import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CategoryPage.css';
import products from '../../data/products.json';
import ProductCards from '../shop/ProductCards';

const CategoryPage = () => {
  const { categoryName } = useParams(); // Get categoryName from the URL
  const [filteredProducts, setFilteredProducts] = useState([]); // This is correct


  useEffect(() => {
    if (categoryName) { // Check if categoryName is defined
      const filtered = products.filter((product) =>
        product.category && product.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]); // Reset if no category is found
    }
  }, [categoryName]);
  
  

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top on category change
  }, [categoryName]);

  return (
    <>
      <section className='section__container'>
        <h2 className='section__header'>
          {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
        </h2>
        <p className='section__subheader'>Browse a diverse collection of {categoryName}</p>
      </section>

      {/* Product cards */}
      <div>
        {filteredProducts.length > 0 ? (
          <ProductCards products={filteredProducts} />
        ) : (
          <p className='no-products-message'>No products found in this category.</p>
        )}
      </div>
    </>
  );
};

export default CategoryPage;
