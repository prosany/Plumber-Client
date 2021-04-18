import React, { useEffect, useState } from 'react';
import { useAuth } from '../../../customHooks/useAuth';
import CurrentOrders from './CurrentOrders';
import './Customer.scss';

const OrderList = () => {
    document.title = 'Order List | Dashboard';
    const { user, authToken } = useAuth() || {};
    const [userOrders, setUserOrders] = useState([]);
    useEffect(() => {
        fetch(`https://plumbing-com.herokuapp.com/orderList?email=` + user?.email, {
            headers: {
                "authorization": authToken
            }
        })
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [user])
    return (
        <div className="Details">
            <div className="Box">
                {userOrders === [] && <div className="loadingCss"></div>}
                <h3 className="TotalOrderCount">Total Order: {userOrders?.length}</h3>
                {
                    userOrders.map(currentOrder => <CurrentOrders key={currentOrder._id} currentOrder={currentOrder}></CurrentOrders>)
                }
            </div>
        </div>
    );
};

export default OrderList;