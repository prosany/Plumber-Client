import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

const Header2 = () => {
    let { url } = useRouteMatch();
    return (
        <>
            <div className="WebsiteLogo">
                <Link to={`${url}`}>
                    <div className="DashLogo"></div>
                </Link>

            </div>
            <div className="MenuBar">
                <Link to={`${url}/order-lists`}>Order List</Link>
                <Link to={`${url}/add-service`}>Add Service</Link>
                <Link to={`${url}/manage-service`}>Manage Service</Link>
                <Link to={`${url}/user-management`}>User Settings</Link>
                <Link to={`${url}/order`}>Order</Link>
                <Link to={`${url}/order-list`}>Order List</Link>
                <Link to={`${url}/review`}>Review</Link>
            </div>
        </>
    );
};

export default Header2;