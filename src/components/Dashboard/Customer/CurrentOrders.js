import React from 'react';

const CurrentOrders = ({ currentOrder }) => {
    const { status, paymentCardBrand } = currentOrder;
    const { image, description, name } = currentOrder.products;

    return (
        <div className="UserCurrentOrderList">
            <div className="CurrentList">
                <div className="CurrentListImage">
                    <img src={image} alt="" />
                </div>
                {
                    status === 'On Going' ?
                        <>
                            <div className="CurrentStatusHold">
                                <span>{status}</span>
                            </div>
                        </> :
                        status === 'Pending' ?
                            <>
                                <div className="CurrentStatusPending">
                                    <span>{status}</span>
                                </div></> :
                            <>
                                <div className="CurrentStatusDone">
                                    <span>{status}</span>
                                </div>
                            </>
                }
            </div>
            <div className="CurrentPDName">
                <h3>{name}</h3>
            </div>
            <div className="CurrentPDDes">
                <p>{description}</p>
            </div>
            <div className="PaymentBy">
                Payment with: {paymentCardBrand}
            </div>
        </div>
    );
};

export default CurrentOrders;