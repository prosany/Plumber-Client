import React from 'react';
import Footer from '../components/Footer/Footer';
import Header1 from '../components/Header/Header1';

const NotFound = () => {
    document.title = 'Error - Plumbing.Com';
    return (
        <>
            <Header1 />
            <div className="NotFound">
                <h1>404</h1>
                <p>Page Not Found, It might have been moved, renamed, or deleted</p>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;