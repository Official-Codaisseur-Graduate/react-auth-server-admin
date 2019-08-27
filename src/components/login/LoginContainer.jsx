import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AuthService from './../../services/AuthService';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import "./LoginContainer.css";

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
                <Button color="primary" onClick={this.login} >Login with Something</Button>
                <Link to="/register">If you dont have an account yet, please press this link</Link>
            </div>
        )
    }
}

export default connect()(LoginContainer);