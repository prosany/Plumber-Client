import React from 'react';
import { useHistory } from 'react-router';

const ServiceArea = ({ service }) => {
    const history = useHistory();
    const orderNow = () => {
        history.push(`/dashboard/order/${service._id}`);
    }
    return (
        <>
            <div className="OurServices">
                <span><img src={service.image} style={{ width: '110px', height: '110px' }} alt={service?.name} /></span>
                <h3>{service?.name}</h3>
                <p>{service?.description}</p>
                <div className="PriceAndOrder">
                    <div className="Price">
                        <h3>${service?.price}</h3>
                    </div>
                    <div className="Buy">
                        <button onClick={orderNow}>Order Now</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceArea;