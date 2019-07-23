import React, { Component } from 'react';
import AuthService from './../services/AuthService';

export default class PublicPage extends Component {

    constructor() {
        super()
        this.service = new AuthService();
    }

    login = () => {
        this.service.signinRedirect();
    }

    render() {
        return (
            <div>
                PUBLIC PAGE
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}
