import React, { useState } from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';

const Signup = () => {

    // State Decleration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    // handle signup fields
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    const handleConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(email, password, confirmPassword)
    }

    return (
        <div className="signup">
            <div className="inner__signup container">
                <div className="signup__content">
                    <div className="signup__form">
                        <div className="signup__form__title">
                            <h3>Sign Up</h3>
                        </div>
                        <div className="signup__form__content">
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
                                    <input onBlur={handleConfirmPassword} type="password" name="confirm-password" id="confirm-password" />
                                    <label htmlFor="confirm-password">Confirm Password</label>
                                </div>
                                <div className="input__group">
                                    <input type="submit" value="Sign Up" />
                                    <div className="already__user">
                                        <p>Already have an account?</p>
                                        <Link to="/login"><button>Login</button></Link>
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

export default Signup;