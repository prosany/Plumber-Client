import React from 'react';
import { useAuth } from '../../../customHooks/useAuth';

const OrderList = () => {
    const { user } = useAuth() || {};
    return (
        <div>
            Admin Order {user.name}
        </div>
    );
};

export default OrderList;