import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import SignUpForm from './SignUpForm';

import { signUp } from '../../actions/signup';
import { getUsers } from '../../actions/users';

export const SignupContainer = ({
    getUsers: getUsersAction,
    signUp: signUpAction
}) => {
    useEffect(() => {
        getUsersAction();
    }, [getUsersAction]);

    const onSubmit = data => signUpAction(data);

    return (
        <>
            <h1>Sign up</h1>
            <SignUpForm onSubmit={onSubmit} />
        </>
    );
};

export default connect(
    null,
    { signUp, getUsers }
)(SignupContainer);
