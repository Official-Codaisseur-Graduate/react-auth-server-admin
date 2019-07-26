import React, { Component } from 'react';
import "./LogoContainer.css";
import { Link } from 'react-router-dom';

export default class LogoContainer extends Component {

    render() {
        return (
            <Link to='/' className="logo-container">
                <h1>🛡</h1>
            </Link>
        )
    }
}
