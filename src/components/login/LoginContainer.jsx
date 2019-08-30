import React from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import AuthService from './../../services/AuthService';

import './LoginContainer.css';

const LoginContainer = () => {
    const service = new AuthService();

    const login = () => service.signinRedirect();

    return (
        <div className="login-container">
            <Button color="primary" onClick={login}>
                Login with Something
            </Button>
            <Link to="/register">
                If you dont have an account yet, please press this link
            </Link>
        </div>
    );
};

export default connect()(LoginContainer);
