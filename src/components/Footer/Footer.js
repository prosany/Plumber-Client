import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Box">
                <div className="FooterAddress">
                    <h4>1600 Amphitheatre Parkway</h4>
                    <h4>Mountain View, CA 94043, USA <br />
                (650) 253-0000</h4>
                </div>
                <div className="FooterCompany">
                    <h3>Company</h3>
                    <ul className="FooterUl">
                        <li>
                            <Link to="/">About</Link>
                        </li>
                        <li>
                            <Link to="/">Services</Link>
                        </li>
                        <li>
                            <Link to="/">Privacy</Link>
                        </li>
                        <li>
                            <Link to="/">Terms</Link>
                        </li>
                        <li>
                            <Link to="/">Help</Link>
                        </li>
                    </ul>
                </div>
                <div className="FooterQuickLink">
                    <h3>Quick Link</h3>
                    <ul className="FooterUl">
                        <li>
                            <Link to="/">Plumbing Service</Link>
                        </li>
                        <li>
                            <Link to="/">Sales</Link>
                        </li>
                        <li>
                            <Link to="/">Blog</Link>
                        </li>
                        <li>
                            <Link to="/">Gallery</Link>
                        </li>
                    </ul>
                </div>
                <div className="FooterAbout">
                    <h3>About Us</h3>
                    <div className="FooterSocial">
                        <span><FontAwesomeIcon icon={faFacebook} /></span>
                        <span><FontAwesomeIcon icon={faTwitter} /></span>
                        <span><FontAwesomeIcon icon={faInstagram} /></span>
                        <span><FontAwesomeIcon icon={faLinkedin} /></span>
                        <span><FontAwesomeIcon icon={faGithub} /></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus temporibus nisi alias ea corrupti quos fugiat cum eius. Dolores, eum.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;