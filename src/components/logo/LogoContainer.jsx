import React from 'react';
import { Link } from 'react-router-dom';

import './LogoContainer.css';

const LogoContainer = () => (
    <Link to="/" className="logo-container">
        <img
            src="https://avatars0.githubusercontent.com/u/39343053?s=200&v=4"
            alt="logo"
        />
    </Link>
);

export default LogoContainer;
