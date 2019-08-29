import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getUsers } from '../actions/users';

const PrivatePage = ({ getUsers: getUsersAction }) => {
    useEffect(() => {
        getUsersAction();
    }, [getUsersAction]);

    return (
        <Link to="/user-list">
            <button>Manage users</button>
        </Link>
    );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(
    mapStateToProps,
    { getUsers }
)(PrivatePage);
