import React from 'react';

const EmptyCard = () => {
    document.title = 'Cart | Dashboard';
    return (
        <div className="Details Empty">
            <h1>Your Cart is empty</h1>
        </div>
    );
};

export default EmptyCard;