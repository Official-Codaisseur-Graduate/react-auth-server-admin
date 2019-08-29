import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../actions/users';

const PrivatePage = ({ getUsers: getUsersAction }) => {
    useEffect(() => {
        getUsersAction();
    }, [getUsersAction]);

    return <div>PRIVATE PAGE</div>;
};

const mapStateToProps = rState => ({
    users: rState.users
});

export default connect(
    mapStateToProps,
    { getUsers }
)(PrivatePage);
