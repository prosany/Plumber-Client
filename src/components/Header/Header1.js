import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../customHooks/useAuth';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faInfoCircle, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header1 = () => {
    const { user, signOut } = useAuth() || {};
    return (
        <>
            <header>
                <div className="Box">
                    <div className="HeaderLeft">
                        <Link to='/'>
                            <div className="Logo"></div>
                        </Link>
                    </div>
                    <div className="HeaderRight">
                        <ul>
                            <li>
                                <Link to="/"><span><FontAwesomeIcon icon={faInfoCircle} /></span>Support</Link>
                            </li>
                            <li>
                                <Link to="/"><span><FontAwesomeIcon icon={faPaperPlane} /></span>Contact Us</Link>
                            </li>
                            {
                                user?.email ? <li>
                                <Link to="/login" onClick={signOut}><span><FontAwesomeIcon icon={faUserCircle} /></span>SignOut</Link>
                            </li> : <li>
                                <Link to="/login"><span><FontAwesomeIcon icon={faUserCircle} /></span>Login</Link>
                            </li>
                            }
                        </ul>
                    </div>
                </div>
            </header>
            <nav>
                <div className="Box">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about-us">About Us</Link>
                        </li>
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Price</Link>
                        </li>
                        <li>
                            <Link to="/">Gallery</Link>
                        </li>
                        <li>
                            <Link to="/">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">Shop</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
};

export default Header1;