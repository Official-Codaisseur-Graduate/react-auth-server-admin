import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HeaderContainer.css";
import UserInfoContainer from '../auth/user-info/UserInfoContainer';
import NavContainer from '../nav/NavContainer';
import LogoContainer from './../logo/LogoContainer';

class HeaderContainer extends Component {
    render() {
        return (
            <div className="header-container">
                <LogoContainer />
                <NavContainer />
                <UserInfoContainer />
            </div>
        )
    }
}

// Export the connected container
export default connect()(HeaderContainer);