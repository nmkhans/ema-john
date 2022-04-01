import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    console.log(cart)
    return (
        <div className="cart">
           <div className="cart__title">
                <h3>Order Summary</h3>
            </div>
            <div className="cart__detail">
                <div className="cart__specifications">
                    <p>Selected Items: {cart.length}</p>
                    <p>Total Price: ${6}</p>
                    <p>Total Shipping Charge: ${6}</p>
                    <p>Tax: ${6}</p>
                </div>
                <div className="cart__grand__total">
                    <h5>Grand Total: ${6}</h5>
                </div>
            </div>
            <div className="cart__summery__button">
                <button>Clear Cart</button>
                <button>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;