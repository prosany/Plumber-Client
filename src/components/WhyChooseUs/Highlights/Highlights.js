import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Highlights = ({ service }) => {
    return (
        <>
            <div className="ChooseReasons">
                <span><FontAwesomeIcon icon={service?.icon} /></span>
                <h3>{service?.title}</h3>
                <p>{service?.description}</p>
            </div>
        </>
    );
};

export default Highlights;