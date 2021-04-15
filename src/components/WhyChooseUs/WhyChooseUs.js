import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './WhyChooseUs.scss';

const WhyChooseUs = ({ service }) => {
    console.log(service?.length)
    return (
        <>
            <div className="ChooseReasons">
                <span><FontAwesomeIcon icon={service.icon} /></span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
            </div>
        </>
    );
};

export default WhyChooseUs;