import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getUsers } from '../../actions/users'
import './Users.css'
import { TableHead, TableRow, TableCell, TableSortLabel } from '@material-ui/core';

const storeData = (users) => {
    return users.map(user => {
        return user.id, user.firstName, user.lastName, user.email, user.dateOfBirth, user.gender
    })
}

function desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

const headRows = [
    { id: 'id', numeric: true, disablePadding: true, label: 'User Id' },
    { id: 'firstName', numeric: false, disablePadding: false, label: "First Name" },
    { id: 'lastName', numeric: false, disablePadding: false, label: "Surname" },
    { id: 'email', numeric: false, disablePadding: false, label: "Email" },
    { id: 'dateOfBirth', numeric: true, disablePadding: false, label: "Date of Birth" },
    { id: 'gender', numeric: false, disablePadding: false, label: "Gender" }
]

function TableHeadToolbar(props) {

    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
    const createSortHandler = property => event => {
        onRequestSort(event, property);
    };

    return (
        <TableHead>
            <TableRow>
                {headRows.map(row => {
                    return <TableCell
                        key={row.id}
                        align={row.numeric ? 'right' : 'left'}
                        padding={row.disablePadding ? 'none' : 'default'}
                        sortDirection={orderBy === row.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === row.id}
                            direction={order}
                            onClick={createSortHandler(row.id)}
                        >
                            {row.label}
                        </TableSortLabel>
                    </TableCell>
                })}
            </TableRow>
        </TableHead>
    )
}

export function Table() {
    return(<TableHeadToolbar />)
}

const mapStateToProps = (rState) => {
    return {
        users: rState.users
    }
}

export default connect(mapStateToProps, { getUsers })(Table)
