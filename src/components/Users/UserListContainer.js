import React, { Component } from 'react'
import EnhancedTable from './UserList';
import { connect } from 'react-redux'
import { getUsers } from '../../actions/users'
import { Link } from 'react-router-dom'
// import UserList from './UserList';

class UserListContainer extends Component {

    componentDidMount() {
        this.props.getUsers()
    }

    render() {
        return (
            <div>
                <Link to='/dashboard'><button>Back to dashboard</button></Link>
                <div>
                    <EnhancedTable users={this.props.users} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rState) => {
    return {
        users: rState.users
    }
}
export default connect(mapStateToProps, { getUsers })(UserListContainer)