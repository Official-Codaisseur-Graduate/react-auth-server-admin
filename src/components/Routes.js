import React, { Component } from 'react'
import SignupContainer from './SignUp/SignupContainer';
import {Route} from 'react-router-dom'
import UserListContainer from './Users/UserListContainer';
import UserListExample from './Users/UserListExample'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/signup' component={SignupContainer} />
                <Route exact path='/users' component={UserListContainer} />
                <UserListExample />
            </div>
        )
    }
}

export default Routes
