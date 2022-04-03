import React, { useState } from 'react';
import Products from './../../components/Products/Products';
import Cart from './../../components/Cart/Cart';
import './Shop.css';
import { addToDb } from '../../database';

const Shop = () => {
    const [cart, setCart] = useState([]);

    
    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }
    
    const getProducts = (savedCart) => {
        setCart(savedCart);
    }

    return (
        <div className="shop">
            <Products addToCart={addToCart} getProducts={getProducts}/>
            <Cart cart={cart}/>
        </div>
    );
};

export default Shop;