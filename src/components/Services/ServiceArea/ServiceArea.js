import React from 'react';

const ServiceArea = ({ service }) => {
    return (
        <>
            <div className="OurServices">
                <span><img src={service.image} style={{ width: '110px', height: '110px', borderRadius: '50%' }} alt={service?.name} /></span>
                <h3>{service?.name}</h3>
                <p>{service?.description}</p>
                <div className="PriceAndOrder">
                    <div className="Price">
                        <h3>${service?.price}</h3>
                    </div>
                    <div className="Buy">
                        <button>Buy Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;