import React, { useEffect, useState } from 'react';
import ServiceArea from './ServiceArea/ServiceArea';
import './Services.scss';


const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/services')
            .then(res => res.json())
            .then(service => setServices(service))
    }, [])

    return (
        <div className="Services" id="services">
            <div className="Box">
                <h2>Our Services</h2>
                {
                    services.map(service => <ServiceArea key={service._id} service={service}></ServiceArea>)
                }
            </div>
        </div>
    );
};

export default Services;