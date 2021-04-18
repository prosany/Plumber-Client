import React from 'react';
import googleSignInButton from '../../images/google-signin.png';
import { useAuth } from '../../customHooks/useAuth';
import Header1 from '../Header/Header1';

const Login = () => {
    document.title = 'Login - Plumbing.Com';
    const { error, googleSignIn } = useAuth() || {};
    return (
        <div>
            <Header1 />
            <div className="Box text-cn">
                <img onClick={googleSignIn} style={{ width: 200, cursor: 'pointer' }} src={googleSignInButton} alt="" />
                {error ? <p>Error</p> : ''}
            </div>
        </div>
    );
};

export default Login;