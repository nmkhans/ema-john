import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {

    // State Decleration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { loginUser } = useFirebase();

    // handle login field
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    // Handle Login
    const handleFormSubmit = (event) => {
        event.preventDefault();
        loginUser(email, password, setError)
    }


    return (
        <div className="login">
            <div className="inner__login container">
                <div className="login__content">
                    <div className="login__form">
                        <div className="login__form__title">
                            <h3>Log In</h3>
                        </div>
                        <div className="login__form__content">
                            <form onSubmit={handleFormSubmit}>
                                <div className="input__group">
                                    <input onBlur={handleEmail} type="email" name="email" id="email" />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input__group">
                                    <input onBlur={handlePassword} type="password" name="password" id="password" />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="input__group">
                                    <input type="submit" value="Log In" />
                                    <div className="already__user">
                                        <p>New Here?</p>
                                        <Link to="/signup"><button>signup</button></Link>
                                    </div>
                                </div>
                                <div className="show__error">{error}</div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;