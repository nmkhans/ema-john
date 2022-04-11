import React from 'react';
import logo from '../../logo.svg';
import './Header.css';
import LinkTo from './../LinkTo/LinkTo';

const Header = () => {
    return (
        <div className="header__area">
            <div className="inner__header__area container">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/">
                            <img src={logo} alt="" />
                        </a>
                    </div>
                    <nav className="header__navigation">
                        <ul>
                            <li><LinkTo className="link" to="/">Home</LinkTo></li>
                            <li><LinkTo className="link" to="/shop">Shop</LinkTo></li>
                            <li><LinkTo className="link" to="/order-review">Order Review</LinkTo></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;