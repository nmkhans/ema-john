import { useState, useEffect } from 'react';
import { getData } from '../database';

const useCart = () => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        let cart = getData('cart');
        let savedCart = []
        const keys = Object.keys(cart);
        fetch('http://localhost:5000/productsById', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
            .then(res => res.json())
            .then(products => {
                for (let id in cart) {
                    const addedProduct = products.find(product => id === product._id);
                    if (addedProduct) {
                        let quantity = cart[id];
                        addedProduct.quantity = quantity;
                        savedCart.push(addedProduct);
                    }
                }
                setCart(savedCart);
            })
    }, [])
    return [cart, setCart];
}

export default useCart;