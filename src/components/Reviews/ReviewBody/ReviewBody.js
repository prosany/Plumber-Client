import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

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
                        <span>{review?.company}</span>
                    </div>
                </div>
                <div className="ReviewMessage">
                    <p>{review?.description}</p>
                </div>
                <Box className="mt-2" component="fieldset" borderColor="transparent">
                    <Rating name="read-only" value={review?.rating} readOnly />
                </Box>
            </div>
        </>
    );
};

export default ReviewBody;