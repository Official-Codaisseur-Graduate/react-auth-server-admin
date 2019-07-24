import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HeaderContainer.css";
import UserInfoContainer from '../auth/user-info/UserInfoContainer';

class HeaderContainer extends Component {
    render() {
        return (
            <div className="header-container">
                <div>Logo</div>
                <div>
                    nav
                </div>
                <UserInfoContainer />
            </div>
        )
    }
}

// Export the connected container
export default connect()(HeaderContainer);