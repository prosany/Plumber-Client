import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const MakeAdmin = () => {
    document.title = 'Make Admin | Dashboard';
    const [makeAdmin, setMakeAdmin] = useState(null);
    const [adminMail, setAdminMail] = useState(null);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        setAdminMail(data)
    };
    const adminInsert = {
        ...adminMail,
        photo: "https://i.ibb.co/WkpNN8b/profile.png",
        permission: "admin"
    };

    useEffect(() => {
        if (adminMail === null || adminMail === undefined) {
            // console.log()
        } else {
            const url = `https://plumbing-com.herokuapp.com/makeAdmin`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(adminInsert)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setMakeAdmin(data);
                        alert('Request To Make Admin Is Successful');
                        history.push('/dashboard');
                    }
                })
        }
    }, [adminMail])
    // console.log(adminMail)
    return (
        <div className="Details">
            <div className="Box">
                <form className="MakeAdminForm" onSubmit={handleSubmit(onSubmit)}>
                    <h3 style={{ color: '#6b7c93' }}>Make Admin</h3>
                    <label>Please enter your name <span style={{color: 'red'}}>*</span></label>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.email && <span className="FormError">Name is required</span>}
                    <label>Please enter your email address <span style={{color: 'red'}}>*</span></label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span className="FormError">Email is required</span>}
                    <button type="submit">Make Admin</button>
                </form>
                {makeAdmin === null ? "" : makeAdmin === true ? <p>Request to make admin is successful</p> : <p>Request to make admin is unsuccessful</p>}
            </div>
        </div>
    );
};

export default MakeAdmin;