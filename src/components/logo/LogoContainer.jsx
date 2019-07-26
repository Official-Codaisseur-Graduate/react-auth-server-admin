import React, { Component } from 'react';
import "./LogoContainer.css";
import { Link } from 'react-router-dom';

export default class LogoContainer extends Component {

    render() {
        return (
            <Link to='/' className="logo-container">
                <img src='https://avatars0.githubusercontent.com/u/39343053?s=200&v=4' alt='logo' />
            </Link>
        )
    }
}
