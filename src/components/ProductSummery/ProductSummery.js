import React from 'react';
import './ProductSummery.css';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductSummery = ({ productInfo, handleDelete }) => {
    const { name, img, price, shipping, quantity } = productInfo;
    return (
        <div className="productSummery">
            <div className="productSummery__left">
                <div className="productSummery__img">
                <img src={img} alt="" />
                </div>
                <div className="productSummery__description" title={name}>
                    <h3>{name.slice(0, 18)}</h3>
                    <p>Price: <span>${price}</span></p>
                    <p>Shipping Charge: <span>${shipping}</span></p>
                    <p>Amount: {quantity}</p>
                </div>
            </div>
            <div className="productSummery__right">
                <div className="productSummery__delete">
                    <button onClick={() => handleDelete(productInfo)}><span><DeleteOutlineIcon className="delete__icon" /></span></button>
                </div>
            </div>
        </div>
    );
};

export default ProductSummery;