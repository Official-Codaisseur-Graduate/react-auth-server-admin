import React, { Component } from 'react';
import AuthService from './../../services/AuthService';
import { connect } from 'react-redux';

class LoginContainer extends Component {
    constructor() {
        super()
        this.service = new AuthService();
    }

    login = () => {
        this.service.signinRedirect();
    }

    render() {
        return (
            <div className="login-container">
                <button onClick={this.login}>Login with Codaisseur</button>
            </div>
        )
    }
}

export default connect()(LoginContainer);
