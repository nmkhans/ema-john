import React, { useState } from 'react';
import Products from './../../components/Products/Products';
import Cart from './../../components/Cart/Cart';
import './Shop.css';

const Shop = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop">
            <Products addToCart={addToCart} />
            <Cart cart={cart}/>
        </div>
    );
};

export default Shop;