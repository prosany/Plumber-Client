import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../customHooks/useAuth';
import CurrentOrders from './CurrentOrders';
import './Customer.scss';

const OrderList = () => {
    const { user, signOut } = useAuth() || {};
    const [userOrders, setUserOrders] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/orderList?email=` + user?.email)
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [user])
    return (
        <div className="Details">
            <div className="Box">
                <h3 className="TotalOrderCount">Total Order: {userOrders?.length}</h3>
                {
                    userOrders.map(currentOrder => <CurrentOrders key={currentOrder._id} currentOrder={currentOrder}></CurrentOrders>)
                }
            </div>
        </div>
    );
};

export default OrderList;