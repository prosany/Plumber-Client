import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewBody = ({ review }) => {
    return (
        <>
            <div className="ReviewBody">
                <div className="Review">
                    <div className="CustomerImage">
                        <img src={review?.image} alt={review?.CustomerName} />
                    </div>
                    <div className="CustomerName">
                        <h3>{review?.CustomerName}</h3>
                        <span>Customer</span>
                    </div>
                </div>
                <div className="ReviewMessage">
                    <p>{review?.description}</p>
                </div>
                <div className="Rating">
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                    <span><FontAwesomeIcon icon={faStar} /></span>
                </div>
            </div>
        </>
    );
};

export default ReviewBody;