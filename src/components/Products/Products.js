import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css';

const Products = ({ addToCart }) => {
    const [pageCount, setPageCount] = useState(0);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(10);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [page, size]);

    useEffect(() => {
        fetch('http://localhost:5000/productCount')
            .then(res => res.json())
            .then(data => {
                const count = data.count;
                const pages = Math.ceil(count / 10);
                setPageCount(pages);
            })
    }, [])

    return (
        <div className="products">
            <div className="inner__products container">
                <div className="products__content">
                    {
                        products.map(product => <Product key={product._id} product={product} addToCart={addToCart} />)
                    }
                </div>
                <div className="product__pagination">
                    {
                        [...Array(pageCount).keys()].map(number => (
                            <button className={page === number ? 'selected' : ''} onClick={() => setPage(number)}>{number}</button>
                        ))
                    }

                    <select onChange={(e) => setSize(e.target.value)}>
                        <option value="5">5</option>
                        <option value="10" selected>10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Products;