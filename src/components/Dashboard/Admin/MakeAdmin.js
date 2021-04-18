import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';

const MakeAdmin = () => {
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
            console.log("Please")
        } else {
            const url = `http://localhost:8080/makeAdmin`;
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
                        history.push('/');
                    }
                })
        }
    }, [adminMail])
    console.log(adminMail)
    return (
        <div className="Details">
            <div className="Box">
                <form className="MakeAdminForm" onSubmit={handleSubmit(onSubmit)}>
                    <label>Please enter your name</label>
                    <input type="text" {...register("name", { required: true })} />
                    {errors.email && <span className="FormError">Email field is required</span>}
                    <label>Please enter your email address</label>
                    <input type="email" {...register("email", { required: true })} />
                    {errors.email && <span className="FormError">Email field is required</span>}
                    <button type="submit">Make Admin</button>
                </form>
                {makeAdmin === null ? "" : makeAdmin === true ? <p>Request to make admin is successful</p> : <p>Request to make admin is unsuccessful</p>}
            </div>
        </div>
    );
};

export default MakeAdmin;