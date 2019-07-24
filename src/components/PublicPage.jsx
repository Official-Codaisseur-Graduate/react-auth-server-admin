import React, { Component } from 'react';
import AuthService from './../services/AuthService';
import "./PublicPage.css";


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
            <div className="public-page">
                <div className="public-inner-container">
                    <h1>PUBLIC PAGE</h1>
                    <p>
                        This is the public page. Anybody can have access to this page.
                    </p>
                    <p>
                        If you would like to access the protected page, click the button below to login with our Auth Provider
                    </p>
                    <button onClick={this.login}>Login with Codaisseur</button>
                </div>
            </div>
        )
    }
}
