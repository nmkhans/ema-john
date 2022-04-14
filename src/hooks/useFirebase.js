import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import auth from '../firebase.init';


const useFirebase = () => {
    //? Hook Utilities
    const [userInfo, setUserInfo] = useState({});
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    //? Hook State Observer
    useEffect(() => {
        onAuthStateChanged(auth, userInfo => {
            setUserInfo(userInfo);
        })
    }, []);


    //? Create user with Email and Password
    const createUser = (email, password, setError) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                if (user) {
                    sendEmailVerification(auth.currentUser)
                        .then(() => console.log('email send'));
                    navigate(from, { replace: true });
                }
            })
            .catch(error => {
                setError(error.message.slice(22, 42));
            })
    }


    //? Login user with Email and Password
    const loginUser = (email, password, setError) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const user = userCredential.user;
                setUserInfo(user);
                navigate(from, { replace: true });
                toast('success');
            })
            .catch(error => {
                setError(error.message.slice(22, 42));
            })
    }


    //? Handle signout User
    const handleSignOut = () => {
        signOut(auth);
    }

    return {
        createUser,
        loginUser,
        handleSignOut,
        userInfo,
    };
}

export default useFirebase;