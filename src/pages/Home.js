import React from 'react';
import Header1 from '../components/Header/Header1';
import HeroImage from '../images/HeroImage.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faRunning, faHistory, faIdCard, faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';

const whyUs = [
    {
        title: 'Emergency Service',
        description: 'When you are facing an emergency, you want a fast, professional plumber and nobody gets there faster dose it better then Plumbing.Com',
        icon: faRunning
    },
    {
        title: 'Available 24/7',
        description: 'Because plumbing problems can strick when you least expect them, our friendly and knowledgeable team works around the clock, even on public holidays.',
        icon: faHistory
    },
    {
        title: 'Licensed & Insured',
        description: 'Our sydney Plumbers are licensed and insured. Each of Our plumbers have at least 10 years experience, no apprentices.',
        icon: faIdCard
    },
    {
        title: 'Well Known Reputation',
        description: 'Plumbers direct offers unmatched plumbing service. You will find the Plumbers Direct team to be the best in the business. We do what we promise. It is that simple.',
        icon: faStar
    }
]

const Home = () => {

    return (
        <>
            <Header1 />
            <div className="HeroBackground">
                <div className="Box">
                    <div className="HeroText">
                        <div className="BigOffer">
                            <h1>Only $99 <span>For Any Drain Cleaning</span></h1>
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
                            <Link to="/">Make Your First Order</Link>
                        </div>
                    </div>
                    <div className="HeroImage">
                        <img src={HeroImage} alt="" />
                    </div>
                </div>
            </div>
            <div className="WhyChooseUs">
                <div className="Box">
                    <h2>Why Choose Us</h2>
                    {
                        whyUs.map(service => <WhyChooseUs key={service.title} service={service}></WhyChooseUs>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;