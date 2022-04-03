import React, { useEffect, useState } from 'react';
import { getData } from '../../database';
import Product from '../Product/Product';
import './Products.css';

const Products = ({addToCart, getProducts}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        let cart = getData('cart');
        let savedCart = []
        for(let id in cart) {
          const addedProduct = products.find(product => id === product.id);
          if(addedProduct) {
                savedCart.push(addedProduct);
                getProducts(savedCart)
          }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [products]);

    return (
        <div className="products">
            <div className="inner__products container">
                <div className="products__content">
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;