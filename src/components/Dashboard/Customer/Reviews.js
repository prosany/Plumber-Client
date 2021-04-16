import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../../customHooks/useAuth';

const Reviews = () => {
    const { user } = useAuth() || {};
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            CustomerName: user.name,
            description: data.review,
            company: data.company,
            image: user.photo
        };
        console.log(eventData)
        const url = `http://localhost:8080/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    };
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder={user?.name} value={user?.name} name="username" {...register("username")} />
                <input placeholder="Company Name" name="company" {...register("company")} />
                <input placeholder="Message" name="review" {...register("review")} />
                <input type="submit" value="Add Product" />
            </form>
        </div>
    );
};

export default Reviews;