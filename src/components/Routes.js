import React, { Component } from 'react'
import SignupContainer from './SignUp/SignupContainer';
import {Route} from 'react-router-dom'

export class Routes extends Component {
    render() {
        return (
            <div>
                <Route exact path='/' component={SignupContainer} />
            </div>
        )
    }
}

export default Routes
