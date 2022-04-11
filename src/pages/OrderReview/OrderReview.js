import React from 'react';
import './OrderReview.css';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';
import ProductReview from '../../components/ProductSummery/ProductSummery';
import OrderSummery from '../../components/OrderSummery/OrderSummery';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div className="orderReview">
            <div className="inner__orderReview container">
                <div className="orderReview__content">
                    <div className="products__summery">
                        {
                            cart.map(product => <ProductReview key={product.id} productInfo={product} />)
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