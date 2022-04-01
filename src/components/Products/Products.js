import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({addToCart}) => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);
    const someProducts = products.slice(0,9);

    return (
        <div className="products">
            <div className="inner__products container">
                <div className="products__content">
                    {
                        someProducts.map(product => <Product key={product.id} product={product} addToCart={addToCart} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;