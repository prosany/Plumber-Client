import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../customHooks/useAuth';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faInfoCircle, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons';

const Header1 = () => {
    const { user, signOut } = useAuth() || {};
    function navBar() {
        const navBar = document.getElementById("MainMenu");
        if (navBar.className === "HeaderRight") {
            navBar.className = "HeaderRight_Responsive";
        } else {
            navBar.className = "HeaderRight";
        }
    };
    return (
        <>
            <header>
                <div className="Box">
                    <div className="HeaderLeft">
                        <a href="/" title="Home - Reload Page">
                            <div className="Logo"></div>
                        </a>
                    </div>
                    <div className="HeaderRight" id="MainMenu">
                        <ul>
                            <li>
                                <Link to="/"><span><FontAwesomeIcon icon={faInfoCircle} /></span>Support</Link>
                            </li>
                            <li>
                                <Link to="/dashboard"><span><FontAwesomeIcon icon={faPaperPlane} /></span>Dashboard</Link>
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
                    <div className="NavBar">
                        <span onClick={navBar}>
                            <FontAwesomeIcon icon={faBars} />
                        </span>
                    </div>
                </div>
            </header>
            <nav>
                <div className="Box">
                    <Link to="/">Home</Link>
                    <Link to="/about-us">About Us</Link>
                    <Link to="/">Services</Link>
                    <Link to="/">Price</Link>
                    <Link to="/">Gallery</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Shop</Link>
                </div>
            </nav>
        </>
    );
};

export default Header1;