import { useState, useEffect } from 'react';
import { getData } from '../database';

const useCart = (products) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
        let cart = getData('cart');
        let savedCart = []
        for(let id in cart) {
          const addedProduct = products.find(product => id === product.id);
          if(addedProduct) {
                let quantity = cart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    }, [products])
    return [cart, setCart];
}

export default useCart;