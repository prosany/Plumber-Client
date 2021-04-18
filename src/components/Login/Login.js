import React from 'react';
import googleSignInButton from '../../images/google-signin.png';
import { useAuth } from '../../customHooks/useAuth';
import Header1 from '../Header/Header1';

const Login = () => {
    document.title = 'Login - Plumbing.Com';
    const { error, googleSignIn} = useAuth() || {};
    return (
        <div>
            <Header1 />
            <img onClick={googleSignIn} style={{ width: 200, cursor: 'pointer' }} src={googleSignInButton} alt="" />
            {error ? <p>Error</p> : ''}
        </div>
    );
};

export default Login;