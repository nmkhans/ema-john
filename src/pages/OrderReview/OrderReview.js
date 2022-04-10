import React from 'react';
import useProducts from './../../hooks/useProducts';
import useCart from './../../hooks/useCart';

const OrderReview = () => {

    const [products] = useProducts();
    const [cart] = useCart(products);
    return (
        <div>
            
        </div>
    );
};

export default OrderReview;