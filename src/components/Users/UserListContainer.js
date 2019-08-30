import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EnhancedTable from './UserList';
import { getUsers } from '../../actions/users';

const UserListContainer = ({ users, getUsers: getUsersAction }) => {
    useEffect(() => {
        if (users.length === 0) getUsersAction();
    }, [getUsersAction, users]);

    return (
        <>
            <Link to="/dashboard">
                <button>Back to dashboard</button>
            </Link>
            <>
                <EnhancedTable users={users} />
            </>
        </>
    );
};

const mapStateToProps = ({ users }) => ({ users });

export default connect(
    mapStateToProps,
    { getUsers }
)(UserListContainer);
