import React, { useEffect, useState } from 'react';
import DeleteService from './DeleteService';
import './Admin.scss';

const ManageService = () => {
    document.title = 'Delete Services | Dashboard';
    const [manageOrder, setManageOrder] = useState([]);
    useEffect(() => {
        fetch('https://plumbing-com.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setManageOrder(data)
                // console.log('Fetch', data)
            })
    }, [])

    return (
        <div className="Details">
            <div className="Box">
                {manageOrder.length === 0 ? <div className="loadingCss"></div> : <h3 style={{ color: '#6b7c93' }}>Manage Services</h3>}
                {
                    manageOrder.map(productDelete => <DeleteService key={productDelete._id} productDelete={productDelete}></DeleteService>)
                }
            </div>
        </div>
    );
};

export default ManageService;