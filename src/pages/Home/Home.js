import React from 'react';
import './Home.css';
import img from './feature.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();
    const shopPage = () => {
        navigate('/shop');
    }

    return (
        <div className="home">
            <div className="inner__home container">
                <div className="home__content">
                    <div className="home__left">
                        <div className="home__left__top">
                            <h2>Sale up to 70% off</h2>
                        </div>
                        <div className="home__left__mid">
                            <h3>New Collection For Fall</h3>
                            <p>Discover all the new arrivals of ready-to-wear collection.</p>
                        </div>
                        <div className="home__left__button">
                            <button onClick={shopPage}>SHOP NOW</button>
                        </div>
                    </div>
                    <div className="home__right">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;