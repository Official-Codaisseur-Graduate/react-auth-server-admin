import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import EnhancedTable from './UserList';

const UserListContainer = ({ users: usersProp }) => (
    <>
        <Link to="/dashboard">
            <button>Back to dashboard</button>
        </Link>
        <>
            <EnhancedTable users={usersProp} />
        </>
    </>
);

const mapStateToProps = ({ users }) => ({ users });

export default connect(mapStateToProps)(UserListContainer);
