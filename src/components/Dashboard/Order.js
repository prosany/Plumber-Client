import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useAuth } from '../../customHooks/useAuth';
import ProcessPayment from './Payment/ProcessPayment';


const Order = () => {
    const { id } = useParams();
    const [waitingOrder, setWaitingOrder] = useState([]);
    const { user } = useAuth() || {};

    useEffect(() => {
        fetch(`http://localhost:8080/order/${id}`)
            .then(res => res.json())
            .then(product => {
                setWaitingOrder(product[0])
                console.log(product)
            })
    }, [id]);
    // console.log(waitingOrder)


    const handlePaymentSuccess = paymentMethod => {
        const savedCart = waitingOrder;
        const orderDetails = {
            ...user,
            products: savedCart,
            paymentID: paymentMethod.id,
            paymentCardBrand: paymentMethod.card.brand,
            paymentCardLast4: paymentMethod.card.last4,
            paymentExpMonth: paymentMethod.card.exp_month,
            paymentExpYear: paymentMethod.card.exp_year,
            status: 'Pending',
            orderTime: new Date()
        };

        fetch('http://localhost:8080/confirmOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('your order placed successfully');
                }
            })
    }


    return (
        <div className="Details">
            <div className="Box">
                <ProcessPayment handlePayment={handlePaymentSuccess} waitingOrder={waitingOrder} />
            </div>
        </div>
    );
};

export default Order;