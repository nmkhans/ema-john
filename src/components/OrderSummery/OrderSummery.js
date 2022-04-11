import React from 'react';
import './OrderSummery.css';

const OrderSummery = ({ cart }) => {

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
        <div className="orderSummery">
            <div className="orderSummery__title">
                <h3>Order Summary</h3>
            </div>
            <div className="orderSummery__detail">
                <div className="orderSummery__specifications">
                    <p>Selected Items: {quantity}</p>
                    <p>Total Price: ${price}</p>
                    <p>Total Shipping Charge: ${shipping}</p>
                    <p>Tax: ${+tax}</p>
                </div>
                <div className="orderSummery__grand__total">
                    <h5>Grand Total: ${grandTotal.toFixed(2)}</h5>
                </div>
            </div>
            <div className="orderSummery__summery__button">
                <button>Clear Cart</button>
                <button>Proceed Checkout</button>
            </div>
        </div>
    );
};

export default OrderSummery;