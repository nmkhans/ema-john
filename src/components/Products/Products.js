import React from 'react';
import Product from '../Product/Product';
import useProducts from './../../hooks/useProducts';
import './Products.css';

const Products = ({addToCart}) => {

    const [products] = useProducts();

    return (
        <div className="products">
            <div className="inner__products container">
                <div className="products__content">
                    {
                        products.map(product => <Product key={product._id} product={product} addToCart={addToCart} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;