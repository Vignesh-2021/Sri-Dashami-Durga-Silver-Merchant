import React from 'react'
import './OrderSummary.css'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../redux/features/cart/cartSlice';

const OrderSummary = () => {
  const { selectedItems, totalPrice, tax, taxrate, grandTotal } = useSelector((store) => store.cart);
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
  }
 

  return (
    <div className='section-container'>
      <h3>Order Summary</h3>
      <p>Selected Items: {selectedItems}</p>
      <p>Total Price: Rs: {totalPrice.toFixed(2)}</p>
      <p>Tax ({(taxrate * 100).toFixed(0)}%): Rs: {tax.toFixed(2)}</p>
      <h4>Grand Total: Rs: {grandTotal.toFixed(2)}</h4>

      <button className='proceed'>Proceed to Checkout</button>    <button onClick={(e) => {
        e.stopPropagation();
        handleClearCart();
      }} className='clear'>Clear Cart</button>
    </div>
  )
}

export default OrderSummary;
