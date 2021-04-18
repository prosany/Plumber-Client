import React, { useEffect, useState } from 'react';
import ReviewBody from './ReviewBody/ReviewBody';
import './Reviews.scss';

const Reviews = () => {
    const [reviews, setReviews ] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    return (
        <div className="Reviews" id="services">
            <div className="Box">
                <h2>Testimonials</h2>
                {
                    reviews.map(review => <ReviewBody key={review._id} review={review}></ReviewBody>)
                }
            </div>
        </div>
    );
};


export default Reviews;