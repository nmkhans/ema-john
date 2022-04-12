import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login">
            <div className="inner__login container">
                <div className="login__content">
                    <div className="login__form">
                        <div className="login__form__title">
                            <h3>Log In</h3>
                        </div>
                        <div className="login__form__content">
                            <form>
                                <div className="input__group">
                                    <input type="email" name="email" id="email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input__group">
                                    <input type="password" name="password" id="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input__group">
                                    <input type="submit" value="Log In" />
                                    <div className="already__user">
                                        <p>New Here?</p>
                                        <Link to="/signup"><button>signup</button></Link>
                                    </div>
                                </div>
                                <div className="already__user">

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;