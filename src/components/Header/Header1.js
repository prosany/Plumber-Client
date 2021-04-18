import React from 'react';
import { Link } from "react-router-dom";
import { useAuth } from '../../customHooks/useAuth';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faInfoCircle, faUserCircle, faBars, faCheckDouble } from '@fortawesome/free-solid-svg-icons';


const newStyle = {
    img: {
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        position: 'absolute',
        margin: '15px 0px 0 0'
    }
}


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
                        <Link to="/" title="Home - Reload Page">
                            <div className="Logo"></div>
                        </Link>
                    </div>
                    <div className="HeaderRight" id="MainMenu">
                        <ul>
                            <li>
                                <Link to="/support"><span><FontAwesomeIcon icon={faInfoCircle} /></span>Support</Link>
                            </li>
                            <li>
                                <Link to="/service"><span><FontAwesomeIcon icon={faCheckDouble} /></span>Services</Link>
                            </li>
                            {
                                user?.email ? <>
                                    <li>
                                        <Link to="/dashboard"><span><FontAwesomeIcon icon={faPaperPlane} /></span>Dashboard</Link>
                                    </li>
                                    <li>
                                        <img style={newStyle.img} src={user?.photo} alt={user?.name} /> <a href="/" onClick={signOut}><span><FontAwesomeIcon icon={faUserCircle} /></span>SignOut</a>
                                    </li>
                                </> : <li>
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
                    <Link to="/Services">Services</Link>
                    <Link to="/Price">Price</Link>
                    <Link to="/Gallery">Gallery</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/Shop">Shop</Link>
                </div>
            </nav>
        </>
    );
};

export default Header1;