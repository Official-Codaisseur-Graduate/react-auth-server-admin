import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./HeaderContainer.css";

class HeaderContainer extends Component {
    render() {
        return (
            <div className="header-container">
                
            </div>
        )
    }
}

// Export the connected container
export default connect()(HeaderContainer);