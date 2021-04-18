import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../customHooks/useAuth';
import OrdersData from './OrdersData';

const OrderList = () => {
    document.title = 'Order List | Dashboard';
    const { authToken } = useAuth() || {};
    const [ordersList, setOrdersList] = useState([]);
    const [updatedValue, setUpdatedValue] = useState(false);

    useEffect(() => {
        fetch('https://plumbing-com.herokuapp.com/orders', {
            headers: {
                "authorization": authToken
            }
        })
            .then(res => res.json())
            .then(data => {
                setOrdersList(data)
                setUpdatedValue(false)
                // console.log('Fetch', data)
            })
    }, [updatedValue])

    // console.log('Id Token', authToken)
    const [state, setState] = React.useState({
        status: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    const handleUpdate = (id) => {
        const updatedStatus = state.status;
        setState({
            status: ''
        })
        const updateNewStatus = {
            id,
            updatedStatus
        }
        if (updatedStatus) {
            fetch(`https://plumbing-com.herokuapp.com/updateStatus/${id}`,
                {
                    method: 'PATCH',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(updateNewStatus)
                })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        setUpdatedValue(true)
                    }
                    // console.log(data)
                })
        }
        // console.log(updateNewStatus)
    }
    return (
        <div className="Details">
            <div className="Box">
                <div className="OrdersLists">
                    {ordersList.length === 0 ? <div className="loadingCss"></div> : <>
                        <h3 style={{ color: '#6b7c93' }}>Total Order: {ordersList?.length}</h3>
                        <ul className="OListLi ResponsiveHide">
                            <li>Name</li>
                            <li>Email</li>
                            <li>Service</li>
                            <li>Payment with</li>
                            <li>Status</li>
                        </ul>
                    </>}

                    {ordersList.map(allOrdersList => <OrdersData handleUpdate={handleUpdate} key={allOrdersList._id} handleChange={handleChange} allOrdersList={allOrdersList}></OrdersData>)}
                </div>
            </div>
        </div >
    );
};

export default OrderList;