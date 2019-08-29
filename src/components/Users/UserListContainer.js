import React, { Component } from 'react';
import EnhancedTable from './UserList';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
// import UserList from './UserList';

class UserListContainer extends Component {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        console.log('this.props test', this.props);
        return (
            <>
                <div>
                    <EnhancedTable users={this.props.users} />
                </div>
            </>
        );
    }
}

const mapStateToProps = rState => {
    return {
        users: rState.users
    };
};
export default connect(
    mapStateToProps,
    { getUsers }
)(UserListContainer);
