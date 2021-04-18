import React from 'react';
import { useAuth } from '../../customHooks/useAuth';
import './Header.scss';

const Header2 = () => {
    const { user, signOut } = useAuth() || {};
    return (
        <div className="headerTwo">
            <div className="Box">
                <div className="HDR">
                    <div className="headerTwo-UserName">
                        <h4><strong>Hello,</strong></h4> {user?.name}
                    </div>
                    <div className="headerTwo-UserEmail">
                        {user?.email}
                        <strong><a href="/" onClick={signOut}>SignOut</a></strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header2;