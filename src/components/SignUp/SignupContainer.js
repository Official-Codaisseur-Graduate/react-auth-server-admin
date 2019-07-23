import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import { connect } from  'react-redux';
import { signUp } from '../../actions/signup';

export class SignupContainer extends Component {

    onSubmit = (data) => {
        const {email, firstName, lastName, password, gender, dateOfBirth} = data
        this.props.signUp(
            email, firstName, lastName, password, gender, dateOfBirth
        )
    }

    render() {
        return (
            <div>
            <h1>Sign up</h1>
            <SignUpForm onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

const mapStateToProps = (rState) => {
    return {
        signin: rState.signIn
    }
}

export default connect(mapStateToProps, {signUp})(SignupContainer)
