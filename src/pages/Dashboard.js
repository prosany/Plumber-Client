import React from 'react';
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
import Header2 from '../components/Header/Header2';
import { AuthProvider } from '../customHooks/useAuth';
import '../style/Dashboard.scss';
import '../style/Global.scss';

const Dashboard = () => {
    let { path } = useRouteMatch();

    return (
        <AuthProvider>
            <main>
                <div className="SildeBar">
                    <div className="Box">
                        <Header2 />
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
                <Route path={`${path}/order`}>
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