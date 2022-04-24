import React from 'react';
import './Shop.css';
import Products from './../../components/Products/Products';
import Cart from './../../components/Cart/Cart';
import { addToDb, deleteShoppingCart } from '../../database';
import useCart from './../../hooks/useCart';
import useProducts from './../../hooks/useProducts';

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const addToCart = (selectedProduct) => {
        let newCart = [];
        const exist = products.find(product => product._id === selectedProduct._id);
        if(!exist) {
            selectedProduct.quantity = 1;
            newCart = [...products, selectedProduct];
        } else {
            const rest = products.filter(product => product._id !== selectedProduct._id);
            exist.quantity += 1;
            newCart = [...rest, exist];
        }


        setCart(newCart);
        addToDb(selectedProduct._id)
    }

    // Empty Cart
    const emptyCart = () => {
        deleteShoppingCart();
        setCart([]);
    }

    return (
        <div className="shop">
            <Products addToCart={addToCart} />
            <Cart emptyCart={emptyCart} cart={cart}/>
        </div>
    );
};

export default Shop;