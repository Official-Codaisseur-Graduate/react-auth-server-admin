import React, { Component } from 'react'
import SignUpForm from './SignUpForm';
import { connect } from  'react-redux';
import { signUp } from '../../actions/signup';
import {getUsers} from '../../actions/users'

export class SignupContainer extends Component {

    componentDidMount(){
        this.props.getUsers()
    }

    onSubmit = (data) => {
        this.props.signUp(data)
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
        signin: rState.signIn,
        users: rState.users
    }
}

export default connect(mapStateToProps, {signUp, getUsers})(SignupContainer)
