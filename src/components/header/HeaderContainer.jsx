import React from 'react';
import { connect } from 'react-redux';

import UserInfoContainer from '../auth/user-info/UserInfoContainer';
import NavContainer from '../nav/NavContainer';
import LogoContainer from '../logo/LogoContainer';

import './HeaderContainer.css';

const HeaderContainer = () => (
    <div className="header-container">
        <LogoContainer />
        <NavContainer />
        <UserInfoContainer />
    </div>
);

// Export the connected container
export default connect()(HeaderContainer);
