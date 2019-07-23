import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/users'
import ListItem from '@material-ui/core/ListItem'
import { List } from '@material-ui/core';
import './Users.css'

export class UserList extends Component {
    componentDidMount() {
        this.props.getUsers()
    }

    renderUsers = (users) => {
        return users.map(user => {
            return <div className="usersList">
                <List>
                    <ListItem >
                        <p>User ID: {user.id}</p>
                    </ListItem>
                    <ListItem>
                        <p>First name: {user.firstName}</p>
                    </ListItem>
                    <ListItem>
                        <p>Last name: {user.lastName}</p>
                    </ListItem>
                    <ListItem>
                        <p>Email: {user.email}</p>
                    </ListItem>
                    <ListItem>
                        <p>Date of birth: {user.dateOfBirth} </p>
                    </ListItem>
                    <ListItem>
                        <p>Gender: {user.gender}</p>
                    </ListItem>

                </List>
            </div>
        })
    }


    render() {


        return (
            <div className="mainUserDiv">
                <h1> User list</h1>
                {!this.props.users && "Loading..."}
                {this.props.users && this.renderUsers(this.props.users)}
            </div>
        )
    }
}

const mapStateToProps = (rState) => {
    return {
        users: rState.users
    }
}

export default connect(mapStateToProps, { getUsers })(UserList)
