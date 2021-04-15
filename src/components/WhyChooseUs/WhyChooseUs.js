import React from 'react';
import { faRunning, faHistory, faIdCard, faStar } from '@fortawesome/free-solid-svg-icons';
import './WhyChooseUs.scss';
import Highlights from './Highlights/Highlights';

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

const WhyChooseUs = () => {
    return (
        <div className="WhyChooseUs">
            <div className="Box">
                <h2>Why Choose Us</h2>
                {
                    whyUs.map(service => <Highlights key={service.title} service={service}></Highlights>)
                }
            </div>
        </div>
    );
};

export default WhyChooseUs;