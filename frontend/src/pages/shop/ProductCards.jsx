import React from 'react';
import './ProductCards.css';
import { Link } from 'react-router-dom';
import RatingStars from '../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const ProductCards = ({ products = [] }) => {

  const dispatch = useDispatch();

    const handleAddtoCart = (product) => {
      dispatch(addToCart(product))
    }  

  return (
    <div className='grid'>
      {products.length > 0 ? (
        products.map((product) => (
          <div key={product.id} className='product__card'>
            <div className='relative'>
              <Link to={`/categories/${product.category || 'uncategorized'}/shop/${product.id}`}>
                <img 
                  src={product.image || '/path/to/placeholder-image.jpg'} // Fallback for missing image
                  alt={product.name} 
                  className='product-image' 
                />
              </Link>
              {/* Cart Icon */}
              <button onClick={(e) => {
                e.stopPropagation();
                handleAddtoCart(product)
                }} className="cart__icon">
                <i className="ri-shopping-cart-line"></i>
                </button>
            </div>
            {/* Product details */}
            <div className='product_details'>
              <h4>{product.name}</h4>
              {product.weight && <p>Weight: {product.weight}</p>}
              <p>
                ${product.price.toFixed(2)}{' '}
                {product.oldPrice && <span className='old-price'> <s>${product.oldPrice.toFixed(2)}</s> </span>}
              </p>
              <RatingStars rating={product.rating} />
            </div>
          </div>
        ))
      ) : (
        <p className='no-products-message'>No products available in this category.</p>
      )}
    </div>
  );
};

export default ProductCards;
