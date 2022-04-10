import React, { useEffect } from 'react';
import { getData } from '../../database';
import Product from '../Product/Product';
import useProducts from './../../hooks/useProducts';
import './Products.css';
import useCart from './../../hooks/useCart';

const Products = ({addToCart, getProducts}) => {

    const [products] = useProducts();
    // const [cart] = useCart(products);

    useEffect(() => {
        let cart = getData('cart');
        let savedCart = []
        for(let id in cart) {
          const addedProduct = products.find(product => id === product.id);
          if(addedProduct) {
              let quantity = addedProduct[id];
              addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        getProducts(savedCart)
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