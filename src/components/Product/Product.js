import React from 'react';
import './Product.css';

const Product = ({product, addToCart}) => {

    const {name, img, price, ratings, seller} = product;

    return (
        <div className="product">
            <div className="inner__product">
                <div className="product__content">
                    <div className="product__card__top">
                        <div className="product__card__feature">
                            <img src={img} alt="" />
                        </div>
                        <div className="product__cart_decsription">
                            <div className="product__name">
                                <h3>{(name.length) > 20 ? name.slice(0, 20): name}</h3>
                                <h4>Price: ${price} </h4>
                            </div>
                            <div className="product__info">
                                <p>Manufacturer : {seller}</p>
                                <p>Rating : {ratings} start</p>
                            </div>
                        </div>
                    </div>
                    <div className="product__card__bottom">
                        <button onClick={() => addToCart(product)}> Add to Cart</button> 
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;