import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useAuth } from '../../customHooks/useAuth';
import ProcessPayment from './Payment/ProcessPayment';


const Order = () => {
    document.title = 'Order | Dashboard';
    const { id } = useParams();
    const history = useHistory();
    const [waitingOrder, setWaitingOrder] = useState([]);
    const { user, authToken } = useAuth() || {};

    useEffect(() => {
        fetch(`https://plumbing-com.herokuapp.com/order/${id}`, {
            headers: {
                "authorization": authToken
            }
        })
            .then(res => res.json())
            .then(product => {
                setWaitingOrder(product[0])
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

        fetch('https://plumbing-com.herokuapp.com/confirmOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('Your Order Placed successfully');
                    history.push('/dashboard');
                }
            })
    }


    return (
        <div className="Details">
            <div className="Box">
                {waitingOrder.length === 0 ? <div className="loadingCss"></div> : <ProcessPayment handlePayment={handlePaymentSuccess} waitingOrder={waitingOrder} />}

            </div>
        </div>
    );
};

export default Order;