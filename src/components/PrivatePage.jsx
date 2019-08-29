import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PrivatePage extends Component {
    render() {
        return (
            <Link to='/user-list'><button>Manage users</button></Link>
        )
    }
}
