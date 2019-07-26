import React, { Component } from 'react';
import AuthService from './../../services/AuthService';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

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
                <Link to="/register">If you dont have an account yet, please press this link</Link>
            </div>
        )
    }
}

export default connect()(LoginContainer);
