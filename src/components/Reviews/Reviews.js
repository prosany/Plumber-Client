import React from 'react';
import ReviewBody from './ReviewBody/ReviewBody';
import './Reviews.scss';

const reviews = [
    {
        CustomerName: 'Mahabub Sany',
        description: 'Water tap installation, Water tap repair',
        image: 'https://i.ibb.co/7b69c7k/Water-Tap-Installation.jpg'

    },
    {
        CustomerName: 'Mahabub Sany',
        description: 'Repair and maintenance, Installation + Repair and maintenance',
        image: 'https://i.ibb.co/gJX9YnW/Water-Meter-Servicing.png'
    },
    {
        CustomerName: 'Mahabub Sany',
        description: 'Installation & repairing, Blockage removal',
        image: 'https://i.ibb.co/CwZRRwV/Sink-Repairs.jpg'
    },
    {
        CustomerName: 'Mahabub Sany',
        description: 'This service includes only problem identification, Background checked professional plumbers',
        image: 'https://i.ibb.co/wd8k9tH/Plumbing-Check-Up.jpg'
    },
    {
        CustomerName: 'Mahabub Sany',
        description: 'This service includes only problem identification, Background checked professional plumbers',
        image: 'https://i.ibb.co/wd8k9tH/Plumbing-Check-Up.jpg'
    },
    {
        CustomerName: 'Mahabub Sany',
        description: 'This service includes only problem identification, Background checked professional plumbers',
        image: 'https://i.ibb.co/wd8k9tH/Plumbing-Check-Up.jpg'
    }
]

const Reviews = () => {
    return (
        <div className="Reviews" id="services">
            <div className="Box">
                <h2>Testimonials</h2>
                {
                    reviews.map(review => <ReviewBody key={review.CustomerName} review={review}></ReviewBody>)
                }
            </div>
        </div>
    );
};

export default Reviews;