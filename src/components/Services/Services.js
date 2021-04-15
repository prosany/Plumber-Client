import React from 'react';
import ServiceArea from './ServiceArea/ServiceArea';
import './Services.scss';

const services = [
    {
        name: 'Water Tap Installation',
        price: 300,
        description: 'Water tap installation, Water tap repair',
        image: 'https://i.ibb.co/7b69c7k/Water-Tap-Installation.jpg'
        
    },
    {
        name: 'Water Meter Servicing',
        price: 600,
        description: 'Repair and maintenance, Installation + Repair and maintenance',
        image: 'https://i.ibb.co/gJX9YnW/Water-Meter-Servicing.png'
    },
    {
        name: 'Sink Repair',
        price: 300,
        description: 'Installation & repairing, Blockage removal',
        image: 'https://i.ibb.co/CwZRRwV/Sink-Repairs.jpg'
    },
    {
        name: 'Plumbing Check Up',
        price: 200,
        description: 'This service includes only problem identification, Background checked professional plumbers',
        image: 'https://i.ibb.co/wd8k9tH/Plumbing-Check-Up.jpg'
    }
]

const Services = () => {

    return (
        <div className="Services" id="services">
            <div className="Box">
                <h2>Our Services</h2>
                {
                    services.map(service => <ServiceArea key={service.name} service={service}></ServiceArea>)
                }
            </div>
        </div>
    );
};

export default Services;