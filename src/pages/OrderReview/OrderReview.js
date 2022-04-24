import React from 'react';
import './OrderReview.css';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import ProductReview from '../../components/ProductSummery/ProductSummery';
import OrderSummery from '../../components/OrderSummery/OrderSummery';
import { removeFromDb } from '../../database';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart, setCart] = useCart();
    const deleteItemFromCart = (productInfo) => {
        const rest = cart.filter(product => product._id !== productInfo._id);
        setCart(rest);
        removeFromDb(productInfo._id);
    }
    return (
        <div className="orderReview">
            <div className="inner__orderReview container">
                <div className="orderReview__content">
                    <div className="products__summery">
                        {
                            cart.map(product => <ProductReview key={product._id} productInfo={product} handleDelete={deleteItemFromCart} />)
                        }
                    </div>
                    <div className="order__summery">
                        <OrderSummery cart={cart} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderReview;