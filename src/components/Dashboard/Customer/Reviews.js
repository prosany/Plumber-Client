import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../customHooks/useAuth';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './Customer.scss';
import { useHistory } from 'react-router';

const Reviews = () => {
    document.title = 'Review | Dashboard';
    const { user } = useAuth() || {};
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [ratingValue, setRatingValue] = useState(4);
    const onSubmit = data => {
        const eventData = {
            CustomerName: user.name,
            description: data.review,
            company: data.company,
            image: user.photo,
            rating: ratingValue
        };
        // console.log(eventData)
        const url = `https://plumbing-com.herokuapp.com/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                alert('Review Added Successful');
                history.push('/dashboard');
            })
    };
    return (
        <div className="Details">
            <div className="Box">
                <h3 className="ReviewHead">Drop Your Feedback or Experience</h3>
                <form className="ReviewForm" onSubmit={handleSubmit(onSubmit)}>
                    <label>Your Name</label>
                    <input placeholder={user?.name} value={user?.name} readOnly name="username" {...register("username", { required: true })} />
                    <label>Company Name or Position</label>
                    <input placeholder="Company or Position" name="company" {...register("company", { required: true })} />
                    {errors.company && <span className="FormError">Company Name or Position field is required</span>}<br />
                    <label>Your Message</label>
                    <textarea rows="6" placeholder="Message" name="review" {...register("review", { required: true })}></textarea>
                    {errors.review && <span className="FormError">Message field is required</span>}<br />
                    <label>Rate By Star</label>
                    <Box component="fieldset" mb={1} borderColor="transparent">
                        <Rating
                            name="simple-controlled"
                            value={ratingValue}
                            onChange={(event, newValue) => {
                                setRatingValue(newValue);
                            }}
                        />
                    </Box>
                    <button type="submit">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default Reviews;