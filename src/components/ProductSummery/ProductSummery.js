import React from 'react';
import './ProductSummery.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductSummery = ({ productInfo }) => {
    const { name, img, price, shipping } = productInfo;
    return (
        <div className="productSummery">
            <div className="productSummery__left">
                <div className="productSummery__img">
                <img src={img} alt="" />
                </div>
                <div className="productSummery__description">
                    <h3>{name.slice(0, 18)}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                </div>
            </div>
            <div className="productSummery__right">
                <div className="productSummery__delete">
                    <button><span><DeleteOutlineIcon /></span></button>
                </div>
            </div>
        </div>
    );
};

export default ProductSummery;