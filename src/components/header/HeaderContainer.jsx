import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HeaderContainer.css";
import LogoContainer from '../logo/LogoContainer';
import SideBar from "./sidebar";

class HeaderContainer extends Component {
    render() {
        return (
            <div>
                <div className="header-container">
                    <LogoContainer />
                    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
                </div>
                
            </div>
        )
    }
}

// Export the connected container
export default connect()(HeaderContainer);