import React, { useState, useMemo } from 'react';
import {
    useStripe, useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from '@stripe/react-stripe-js';
import '../Order.scss';
import { useAuth } from '../../../customHooks/useAuth';


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        })
    );

    return options;
};


const SimpleCardForm = ({ handlePayment, waitingOrder }) => {
    const { user } = useAuth() || {};
    const stripe = useStripe();
    const elements = useElements();
    const [paymentError, setPaymentError] = useState(null);
    const [paymentSuccess, setPaymentSuccess] = useState(null);
    const options = useOptions();

    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardNumberElement)
        });

        if (error) {
            setPaymentError(error.message);
            setPaymentSuccess(null);
        } else {
            setPaymentSuccess(paymentMethod.id, paymentMethod.card.brand, paymentMethod.card.last4, paymentMethod.card.exp_month, paymentMethod.card.exp_year);
            setPaymentError(null);
            handlePayment(paymentMethod);
            // console.log('[PaymentMethod]', paymentMethod);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit} className="PaymentForm">
                <div className="PayLeft">
                    <h3>Your Information</h3>
                    <label>Name
                    <input style={{ width: '90%' }} type="text" placeholder={user?.name} readOnly />
                    </label>
                    <label>Email Address
                    <input style={{ width: '90%' }} type="text" placeholder={user?.email} readOnly />
                    </label>
                    <label>Service You Want to Buy
                    <input style={{ width: '90%' }} required type="text" placeholder={waitingOrder?.name} readOnly />
                    </label>
                </div>
                <div className="PayRight">
                    <h3>Payment Information</h3>
                    <label>
                        Card number
                        <CardNumberElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                    <label>
                        Expiration date
                        <CardExpiryElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                    <label>
                        CVC
                        <CardCvcElement
                            options={options}
                            onReady={() => {
                                // console.log("CardNumberElement [ready]");
                            }}
                            onChange={event => {
                                // console.log("CardNumberElement [change]", event);
                            }}
                            onBlur={() => {
                                // console.log("CardNumberElement [blur]");
                            }}
                            onFocus={() => {
                                // console.log("CardNumberElement [focus]");
                            }}
                        />
                    </label>
                    <button type="submit" disabled={!stripe}>
                        Complete Order
                    </button>
                </div>
            </form>
            {
                paymentError && <p style={{ color: 'red' }}>{paymentError}</p>
            }
            {
                paymentSuccess && <p style={{ color: 'green' }}>Your Payment was successful.</p>
            }
        </>
    );
};

export default SimpleCardForm;