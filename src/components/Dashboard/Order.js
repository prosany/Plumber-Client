import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Order = () => {
    const { id } = useParams();
    const [waitingOrder, setWaitingOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/order/${id}`)
            .then(res => res.json())
            .then(product => {
                setWaitingOrder(product[0])
                console.log(product)
            })
    }, [id]);
    console.log(waitingOrder)
    return (
        <div>
            <h1>Your Cart is empty</h1>
        </div>
    );
};

export default Order;