import React from 'react';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const DeleteService = ({ productDelete }) => {
    const { name, price, description, image } = productDelete;
    const history = useHistory();

    const deleteService = id => {
        // console.log(id)
        const url = `https://plumbing-com.herokuapp.com/manageService/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Delete Successful');
                    history.push('/dashboard');
                }
            })
    }
    return (
        <div className="RemoveService">
            <div className="RemoveServiceList">
                <div className="RemoveServiceImage">
                    <img src={image} alt="" />
                </div>
                <div className="RemoveServiceBtn">
                    <button onClick={() => deleteService(productDelete._id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                </div>
            </div>
            <div className="RemoveServiceName">
                <h3>{name}</h3>
            </div>
            <div className="RemoveServiceDes">
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DeleteService;