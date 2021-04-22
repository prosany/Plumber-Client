import React, { useEffect, useState } from 'react';
import {
    Route, Switch, useRouteMatch
} from 'react-router';
import { Link } from 'react-router-dom';
import AddService from '../components/Dashboard/Admin/AddService';
import MakeAdmin from '../components/Dashboard/Admin/MakeAdmin';
import ManageService from '../components/Dashboard/Admin/ManageService';
import OrderLists from '../components/Dashboard/Admin/OrderLists';
import EmptyCard from '../components/Dashboard/Customer/EmptyCard';
import OrderList from '../components/Dashboard/Customer/OrderList';
import Reviews from '../components/Dashboard/Customer/Reviews';
import Order from '../components/Dashboard/Order';
import Header2 from '../components/Header/Header2';
import { AuthProvider, useAuth } from '../customHooks/useAuth';
import '../style/Dashboard.scss';
import '../style/Global.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListOl, faPlus, faPencilAlt, faUserShield, faShoppingCart, faCommentDots, faHome, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const Dashboard = () => {
    document.title = 'Dashboard - Plumbing';
    let { path, url } = useRouteMatch();
    const { user, authToken } = useAuth() || {};
    const [verifyStatus, setVerifyStatus] = useState([]);

    useEffect(() => {
        fetch(`https://plumbing-com.herokuapp.com/verify-email-address?email=` + user?.email, {
            headers: {
                "authorization": authToken
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setVerifyStatus(data[0])
                } else {
                    console.log("Nothing")
                }
            })
    }, [user]);

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
                                <Link to={`${url}/order-lists`}><span><FontAwesomeIcon icon={faListOl} /></span>Order List</Link>
                                <Link to={`${url}/add-service`}><span><FontAwesomeIcon icon={faPlus} /></span>Add Service</Link>
                                <Link to={`${url}/manage-service`}><span><FontAwesomeIcon icon={faPencilAlt} /></span>Manage Service</Link>
                                <Link to={`${url}/user-management`}><span><FontAwesomeIcon icon={faUserShield} /></span>User Settings</Link>
                            </> : ''}
                            {verifyStatus?.permission === 'customer' ? <>
                                <Link to={`${url}/cart`}><span><FontAwesomeIcon icon={faShoppingCart} /></span>Cart</Link>
                                <Link to={`${url}/order-list`}><span><FontAwesomeIcon icon={faListOl} /></span>Order List</Link>
                                <Link to={`${url}/review`}><span><FontAwesomeIcon icon={faCommentDots} /></span>Review</Link>
                            </> : ''}
                            {verifyStatus?.length === 0 && <div className="loadingCss"></div>}
                        </div>
                        <div className="GoBackHome">
                            <h3><span><FontAwesomeIcon icon={faExclamationTriangle} /></span>Quick Link</h3>
                            <Link to="/"><span><FontAwesomeIcon icon={faHome} /></span>Home Page</Link>
                        </div>
                    </div>
                </div>
                <div className="Details">
                    <Header2 />
                    <br />
                    <div className="Box">
                        {
                            verifyStatus?.length === 0 ? <div className="SKLodaer"></div> :
                                <>
                                    <div className="UserDashInfo">
                                        <div className="UserPP">
                                            <img src={verifyStatus?.photo} alt={verifyStatus?.name} />
                                        </div>
                                        <div className="UserName">
                                            <h2>{verifyStatus?.name}</h2>
                                            <p>{verifyStatus?.email}</p>
                                            <p className="UserPeram">Permission: {verifyStatus?.permission}</p>
                                        </div>
                                    </div>
                                </>
                        }
                    </div>
                    <div className="GoHome">
                        <Link to="/"><span><FontAwesomeIcon icon={faHome} /></span></Link>
                    </div>
                </div>
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
                <Route path={`${path}/cart`}>
                    <EmptyCard />
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