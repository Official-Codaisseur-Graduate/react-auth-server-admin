import React, { Component } from 'react'
import SignupContainer from './SignUp/SignupContainer';
import {Route} from 'react-router-dom'
import UserListContainer from './Users/UserListContainer';
import UserListExample from './Users/UserListExample'
import { Table } from './Users/UserList';

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/signup' component={SignupContainer} />
                <Route exact path='/users' component={UserListContainer} />
                <Table />
            </div>
        )
    }
}

export default Routes
