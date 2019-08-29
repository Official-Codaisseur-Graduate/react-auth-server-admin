import React, { Component } from 'react';
import EnhancedTable from './UserList';
import { connect } from 'react-redux';

// import UserList from './UserList';

class UserListContainer extends Component {
    render() {
        console.log('this.props test', this.props);
        return <EnhancedTable users={this.props.users} />;
    }
}

const mapStateToProps = rState => {
    return {
        users: rState.users
    };
};
export default connect(mapStateToProps)(UserListContainer);
