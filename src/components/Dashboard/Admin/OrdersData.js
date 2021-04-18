import React from 'react';
import Select from '@material-ui/core/Select';

const OrdersData = ({ allOrdersList, handleChange, handleUpdate }) => {
    const { name, email, paymentCardBrand, status, _id } = allOrdersList;
    let className;
    switch (status) {
        case 'Pending':
            className = 'PendingStatus'
            break;
        case 'On Going':
            className = 'OnGoingStatus'
            break;
        case 'Done':
            className = 'DoneStatus'
            break;
        default:
            className = 'Default'
            break;
    }

    return (

        <>
            <ul className="OListLi">
                <li>{name}</li>
                <li>{email}</li>
                <li>{allOrdersList.products.name}</li>
                <li>{paymentCardBrand}</li>
                <li>
                    <Select
                        native
                        value={status}
                        onChange={handleChange}
                        onClick={() => handleUpdate(_id)}
                        inputProps={{
                            name: 'status',
                        }}
                        className={className}
                    >
                        <option value={status}>{status}</option>
                        <option value="Pending">Pending</option>
                        <option value="On Going">On Going</option>
                        <option value="Done">Done</option>
                    </Select>

                </li>
            </ul>
        </>
    );
};

export default OrdersData;