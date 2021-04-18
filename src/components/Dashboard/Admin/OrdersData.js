import React, { useState } from 'react';

const OrdersData = ({ allOrdersList }) => {
    const { name, email, paymentCardBrand, status } = allOrdersList;
    const [currentStatus, setCurrentStatus] = useState([]);

    console.log(currentStatus)
    
    return (
        <>
            <ul className="OListLi">
                <li>{name}</li>
                <li>{email}</li>
                <li>{allOrdersList.products.name}</li>
                <li>{paymentCardBrand}</li>
                <li>
                    
                </li>
            </ul>
        </>
    );
};

export default OrdersData;