import React from 'react';
import HeroImage from '../../images/HeroImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const HeroBackground = () => {
    return (
        <div className="HeroBackground">
            <div className="Box">
                <div className="HeroText">
                    <div className="BigOffer">
                        <h1>Only $200 <span>For Plumbing Check Up</span></h1>
                    </div>
                    <h3>We Are Available For</h3>
                    <h1>Plumbing Solutions</h1>
                    <div className="Feature">
                        <ul>
                            <li><span><FontAwesomeIcon icon={faCheckCircle} /></span>Upfront, Flat Rate Price</li>
                            <li><span><FontAwesomeIcon icon={faCheckCircle} /></span>Never an Overtime Charge</li>
                            <li><span><FontAwesomeIcon icon={faCheckCircle} /></span>Courteous, Uniformed Professionals</li>
                        </ul>
                    </div>
                    <div className="RequestAnApp">
                        <Link to="#services">Make Your First Order</Link>
                    </div>
                </div>
                <div className="HeroImage">
                    <img src={HeroImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default HeroBackground;