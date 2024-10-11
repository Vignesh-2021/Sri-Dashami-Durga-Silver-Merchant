import React from 'react';
import './CartPage.css';
import { useSelector, useDispatch } from 'react-redux';  // Import useDispatch
import OrderSummary from './OrderSummary';
import { removeFromCart, updateQuantity } from '../redux/features/cart/cartSlice';

const CartPage = () => {
    const products = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();  // Initialize dispatch

    const handleQuantity = (type, id) => {
        const payload = { type, id };
        dispatch(updateQuantity(payload));  // Dispatch the action with the correct payload
    };
    const handleremove = (e,id) => {
        e.preventDefault()
        dispatch(removeFromCart({id}))
       }
    

    return (
        <div className='cart_container'>
            <div className='cart_section'>
                <h2>Your Cart</h2>
                <div>
                    {products.length === 0 ? (
                        <div>Your Cart is Empty</div>
                    ) : (
                        products.map((item, index) => (
                            <div key={index} className='cart_details'>
                                <div>
                                    <span>0{index + 1}</span>
                                    <img src={item.image} alt="" className='img_profile' />
                                    <div>
                                        <h5>{item.name}</h5>
                                        <p>Rs:{Number(item.price).toFixed(2)}</p>
                                    </div>

                                    <div>
                                        <button onClick={() => handleQuantity('decrement', item.id)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => handleQuantity('increment', item.id)}>+</button>
                                    </div>
                                    <div>
                                        <button onClick={(e) => handleremove(e,item.id)}>Remove</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                <OrderSummary />
            </div>
        </div>
    );
};

export default CartPage;
