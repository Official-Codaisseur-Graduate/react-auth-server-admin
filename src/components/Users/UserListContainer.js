import React, { Component } from 'react'
import EnhancedTable from './UserList';
import {connect} from 'react-redux'
import {getUsers} from '../../actions/users'
// import UserList from './UserList';

export class UserListContainer extends Component {

    componentDidMount() {
        this.props.getUsers()
    }
    

    render() {
        return (
            <div>
                <EnhancedTable users={this.props.users}/>
            </div>
        )
    }
}

const mapStateToProps = (rState) => {
    return{
        users: rState.users
    }
}
export default connect(mapStateToProps,{getUsers})(UserListContainer)
