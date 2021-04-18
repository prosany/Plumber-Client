import React, { useEffect, useState } from 'react';
import OrdersData from './OrdersData';

const OrderList = () => {
    const [ordersList, setOrdersList] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/orders')
            .then(res => res.json())
            .then(data => {
                setOrdersList(data)
               
            })
    }, [])
    console.log(ordersList)
    return (
        <div className="Details">
            <div className="Box">
                <h2>Total Order: {ordersList?.length}</h2>
                <div className="OrdersLists">
                    <ul className="OListLi">
                        <li>Name</li>
                        <li>Email</li>
                        <li>Service</li>
                        <li>Payment with</li>
                        <li>Status</li>
                    </ul>
                    {ordersList.map(allOrdersList => <OrdersData key={allOrdersList._id} allOrdersList={allOrdersList}></OrdersData>)}
                </div>
            </div>
        </div>
    );
};

export default OrderList;