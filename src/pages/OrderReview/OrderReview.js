import React, { useEffect, useState } from 'react';
import { getData } from '../../database';

const OrderReview = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        let savedCart = []
        let cart = getData('cart');
        for(let id in cart) {
          const addedProduct = products.find(product => id === product.id);
          if(addedProduct) {
                savedCart.push(addedProduct);
          }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    
    return (
        <div>
            <h1>This is order review page</h1>
        </div>
    );
};

export default OrderReview;