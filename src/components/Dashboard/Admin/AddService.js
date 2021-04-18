import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import './Admin.scss';

const AddService = () => {
    const [serviceImg, setServiceImg] = useState('');
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            description: data.description,
            image: serviceImg
        };
        console.log(eventData)
        const url = `http://localhost:8080/addService`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    history.push('/');
                }
            })
    };


    const history = useHistory();

    const handleProductImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', '217e4a7b8abfe51f2a79a5865e0b806a');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setServiceImg(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    console.log(process.env)
    return (
        <div className="Details">
            <div className="Box">
                <form className="AddServiceForm" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Service Name" name="name" {...register("name")} />
                    <input placeholder="Des" name="description" {...register("description")} />
                    <input name="price" placeholder="Price" {...register("price", { required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <label htmlFor="ProductImage">Product Image</label><br />
                    <input id="ProductImage" name="exampleRequired" type="file" onChange={handleProductImageUpload} />
                    <div className="ImageUploadPreview">
                        {serviceImg ? <div className="Deff"><img src={serviceImg} alt="Upload Success" /><p>Upload Success</p></div> : <div className="Deff"><img src="https://i.ibb.co/S7bxDjK/img-Preview.png" alt="No Image Uploaded Yet" /><p>No Image Uploaded Yet</p> </div>}
                    </div>
                    <button type="submit">Add New Service</button>
                </form>
            </div>
        </div>
    );
};

export default AddService;