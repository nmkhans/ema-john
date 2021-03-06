import React from 'react';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = ({cart, emptyCart}) => {
    const navigate = useNavigate();

    const toOrderReview = () => {
        const path = '/order-review';
        navigate(path);
    }

    let price = 0;
    let shipping = 0;
    let quantity = 0;
    for (let product of cart) {
        quantity = quantity + product?.quantity;
        price = price + product?.price * product?.quantity;
        shipping = shipping + product?.shipping * product?.quantity;
    }
    const tax = ((price + shipping) * (10 / 100)).toFixed(2);
    const grandTotal = price + shipping + +tax;

    return (
        <div className="cart">
           <div className="cart__title">
                <h3>Order Summary</h3>
            </div>
            <div className="cart__detail">
                <div className="cart__specifications">
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${+tax}</p>
                </div>
                <div className="cart__grand__total">
                    <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
                </div>
            </div>
            <div className="cart__summery__button">
                <button onClick={emptyCart}>Clear Cart</button>
                <button onClick={toOrderReview}>Review Order</button>
            </div>
        </div>
    );
};

export default Cart;