import React, { useEffect, useState } from 'react';
import ReviewBody from './ReviewBody/ReviewBody';
import './Reviews.scss';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://plumbing-com.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className="Reviews" id="services">
            <div className="Box">
                <h2>Testimonials</h2>
                {reviews.length === 0 && <div className="loadingCss"></div>}
                {
                    reviews.map(review => <ReviewBody key={review._id} review={review}></ReviewBody>)
                }
            </div>
        </div>
    );
};


export default Reviews;