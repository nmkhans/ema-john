import React from 'react';
import Products from './../../components/Products/Products';
import Cart from './../../components/Cart/Cart';
import './Shop.css';

const Shop = () => {
    return (
        <div className="shop">
            <Products />
            <Cart />
        </div>
    );
};

export default Shop;