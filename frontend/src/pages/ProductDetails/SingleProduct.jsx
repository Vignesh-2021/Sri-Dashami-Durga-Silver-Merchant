import React from 'react';
import './SingleProduct.css';
import { useParams } from 'react-router-dom';
import products from '../../data/products.json'; // Assuming you have product data in this file
import RatingStars from '../../components/RatingStars';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/features/cart/cartSlice';

const SingleProduct = () => {
    const { productId } = useParams(); 

    const dispatch = useDispatch();

    const handleAddtoCart = (product) => {
      dispatch(addToCart(product))
    }

   
    // Find the product that matches the productId
    const product = products.find(p => p.id === parseInt(productId));

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
      <><div className='single-product-container'>
        <div className='product-image'>
          <img src={product.image} alt={product.name} />
        </div>
        <div className='product-details'>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Weight: {product.weight}</p>
          <p>Price: ${product.price}</p>
          {product.oldPrice && <p>Old Price: <s>${product.oldPrice}</s></p>}
          <RatingStars rating={product.rating} />
          <button onClick={(e) => {
            e.stopPropagation();
            handleAddtoCart(product)
            }}  
          className='cart_btn'>Add to cart</button>
          {/* Add to Cart button or other actions can go here */}
        </div>
      </div>
      {/*display Reviews*/}
      {/*TODO: Work with review when will have api */}
      <section className='section_container'>
          <h3>Reviews Here</h3>

        </section></>
    );
}

export default SingleProduct;
