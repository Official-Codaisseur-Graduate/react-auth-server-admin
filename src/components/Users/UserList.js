import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';


//Create the Row names and values on the top of the table
const headRows = [
    { id: 'id', numeric: true, disablePadding: true, label: 'User Id' },
    { id: 'firstName', numeric: false, disablePadding: false, label: "First Name" },
    { id: 'lastName', numeric: false, disablePadding: false, label: "Surname" },
    { id: 'email', numeric: false, disablePadding: false, label: "Email" },
    { id: 'dateOfBirth', numeric: true, disablePadding: false, label: "Date of Birth" },
    { id: 'gender', numeric: false, disablePadding: false, label: "Gender" }
]


//Function to render the headRows variable on the screen
function TableHeadPrefix(props) {
    return (
        <TableHead>
            <TableRow>
                {headRows.map(row => {
                    return <TableCell
                        key={row.id}
                        align={row.numeric ? 'right' : 'left'}
                        padding={row.disablePadding ? 'none' : 'default'}
                    >
                        <TableSortLabel
                        >
                            {row.label}
                        </TableSortLabel>
                    </TableCell>
                })}
            </TableRow>
        </TableHead>
    )
}

//Styles used inside the EnhancedTable function
const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    table: {
        minWidth: 750,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
}))

export function EnhancedTable(props) {
    const classes = useStyles()
    const [page, setPage] = React.useState(0)
    const [rowsPerPage, setRowsPerPage] = React.useState(5);


    //Functions for pagination
    function handleChangePage(newPage) {
        setPage(newPage)
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }


    return (
        <div >
            <Paper className={classes.paper}>
                <div >
                    <Table
                    >
                        <TableHeadPrefix
                            rowCount={props.users.length}
                        />
                        <TableBody>
                            {props.users.map((user, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`

                                return (
                                    <TableRow key={user.id}
                                        hover
                                    >
                                        <TableCell id={labelId} padding="none" align="right">
                                            {user.id}
                                        </TableCell>
                                        <TableCell align="left">{user.firstName}</TableCell>
                                        <TableCell align="left">{user.lastName}</TableCell>
                                        <TableCell align="left">{user.email}</TableCell>
                                        <TableCell align="right">{user.dateOfBirth}</TableCell>
                                        <TableCell align="left">{user.gender}</TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={props.users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
            </Paper>
        </div>
    )
}

export default EnhancedTable
