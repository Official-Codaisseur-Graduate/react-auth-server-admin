import React, { Component } from 'react';
import { connect } from 'react-redux';

class UserInfoContainer extends Component {
    render() {
        return (
            <div className="user-info-container">
                <div className="username">Billy Vlachos</div>
            </div>
        )
    }
}

// Export the connected component
export default connect()(UserInfoContainer);