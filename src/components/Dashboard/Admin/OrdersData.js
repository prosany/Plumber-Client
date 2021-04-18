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
                <li><h4 className="OnlyResponsive">Customer Name</h4>{name}</li>
                <li><h4 className="OnlyResponsive">Email</h4>{email}</li>
                <li><h4 className="OnlyResponsive">Product Name</h4>{allOrdersList.products.name}</li>
                <li><h4 className="OnlyResponsive">Payment Using</h4>{paymentCardBrand}</li>
                <li><h4 className="OnlyResponsive">Order Status</h4>
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