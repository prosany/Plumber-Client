import React, { useEffect, useState } from 'react';
import {
    Route, Switch, useRouteMatch
} from 'react-router';
import { Link } from 'react-router-dom';
import AddService from '../components/Dashboard/Admin/AddService';
import MakeAdmin from '../components/Dashboard/Admin/MakeAdmin';
import ManageService from '../components/Dashboard/Admin/ManageService';
import OrderLists from '../components/Dashboard/Admin/OrderLists';
import OrderList from '../components/Dashboard/Customer/OrderList';
import Reviews from '../components/Dashboard/Customer/Reviews';
import Order from '../components/Dashboard/Order';
import { AuthProvider, useAuth } from '../customHooks/useAuth';
import '../style/Dashboard.scss';
import '../style/Global.scss';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user } = useAuth() || {};
    const [verifyStatus, setVerifyStatus] = useState([]);

    useEffect(() => {
        fetch(`https://plumbing-com.herokuapp.com/verify-email-address?email=` + user?.email)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setVerifyStatus(data[0])
                } else {
                    console.log("Nothing")
                }
            })
    }, [user]);
    console.log(user.email, verifyStatus?.email)

    return (
        <AuthProvider>
            <main>
                <div className="SildeBar">
                    <div className="Box">
                        <div className="WebsiteLogo">
                            <Link to={`${url}`}>
                                <div className="DashLogo"></div>
                            </Link>

                        </div>
                        <div className="MenuBar">
                            {verifyStatus?.permission === 'admin' ? <>
                                <Link to={`${url}/order-lists`}>Order List</Link>
                                <Link to={`${url}/add-service`}>Add Service</Link>
                                <Link to={`${url}/manage-service`}>Manage Service</Link>
                                <Link to={`${url}/user-management`}>User Settings</Link>
                            </> : ''}
                            {verifyStatus?.permission === 'customer' ? <>
                                <Link to={`${url}/order`}>Order</Link>
                                <Link to={`${url}/order-list`}>Order List</Link>
                                <Link to={`${url}/review`}>Review</Link>
                            </> : ''}
                        </div>
                        <div className="GoBackHome">
                            <h3>Quick Link</h3>
                            <Link to="/">Home Page</Link>
                        </div>
                    </div>
                </div>
                <div className="Details"></div>
            </main>
            <Switch>
                <Route exact path={path}>
                </Route>
                <Route path={`${path}/order-lists`}>
                    <OrderLists />
                </Route>
                <Route path={`${path}/add-service`}>
                    <AddService />
                </Route>
                <Route path={`${path}/manage-service`}>
                    <ManageService />
                </Route>
                <Route path={`${path}/user-management`}>
                    <MakeAdmin />
                </Route>
                <Route path={`${path}/order/:id`}>
                    <Order />
                </Route>
                <Route path={`${path}/order-list`}>
                    <OrderList />
                </Route>
                <Route path={`${path}/review`}>
                    <Reviews />
                </Route>
            </Switch>
        </AuthProvider>
    );
};

export default Dashboard;