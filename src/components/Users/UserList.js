import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
// import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { TablePagination } from '@material-ui/core';
// import IconButton from '@material-ui/core/IconButton';
// import Tooltip from '@material-ui/core/Tooltip';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Switch from '@material-ui/core/Switch';
// import { connect } from 'react-redux'
// import { getUsers } from '../../actions/users'
// import { linkSync } from 'fs';



const headRows = [
    { id: 'id', numeric: true, disablePadding: true, label: 'User Id' },
    { id: 'firstName', numeric: false, disablePadding: false, label: "First Name" },
    { id: 'lastName', numeric: false, disablePadding: false, label: "Surname" },
    { id: 'email', numeric: false, disablePadding: false, label: "Email" },
    { id: 'dateOfBirth', numeric: true, disablePadding: false, label: "Date of Birth" },
    { id: 'gender', numeric: false, disablePadding: false, label: "Gender" }
]




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





// const useToolbarStyles = makeStyles(theme => ({
//     root: {
//         paddingLeft: theme.spacing(2),
//         paddingRight: theme.spacing(1),
//     },
//     highlight:
//         theme.palette.type === 'light'
//             ? {
//                 color: theme.palette.secondary.main,
//                 backgroundColor: lighten(theme.palette.secondary.light, 0.85),
//             }
//             : {
//                 color: theme.palette.text.primary,
//                 backgroundColor: theme.palette.secondary.dark,
//             },
//     spacer: {
//         flex: '1 1 100%',
//     },
//     actions: {
//         color: theme.palette.text.secondary,
//     },
//     title: {
//         flex: '0 0 auto',
//     },
// }))


// const TableToolBar = (props) => {
//     const classes = useToolbarStyles()
//     const { numSelected } = props

//     return (
//         <Toolbar
//             className={clsx(classes.root, {
//                 [classes.highlight]: numSelected > 0,
//             })}
//         >
//             <div className={classes.title}>
//                 {numSelected > 0 ? (
//                     <Typography color="inherit" variant="subtitle1">
//                         {numSelected} selected
//                 </Typography>
//                 ) : (
//                         <Typography variant="h6" id="tableTitle">
//                             Edit later
//                 </Typography>
//                     )}
//             </div>
//             <div className={classes.spacer} />
//             <div className={classes.actions}>
                
//                     <Tooltip title="">
//                         <IconButton aria-label="Delete">
//                         </IconButton>
//                     </Tooltip>
//                         <Tooltip title="Filter list">
//                             <IconButton aria-label="Filter list">
//                             </IconButton>
//                         </Tooltip>
//                     )}
//             </div>
//         </Toolbar>
//     )
// }



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


    // function handleSortRequest(event, property) {
    //     const isDesc = this.orderBy === property && this.order === 'desc'
    //     this.setOrder(isDesc ? 'asc' : 'desc')
    //     this.setOrderBy(property)
    // }



    function handleChangePage(newPage) {
        setPage(newPage)
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(+event.target.value)
        setPage(0)
    }

    // function handleChangeDense(event) {
    //     this.setDense(event.target.checked)
    // }

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

// export class EnhancedTable extends Component {


//         console.log(users)



//         return (
//             <div className={classes.root}>
//                 <Paper>
//                     <TableToolBar />
//                     <div>
//                         <Table>
//                             <TableHeadPrefix />
//                             <TableBody>
//                                 {stableSort(users, getSorting(order, orderBy))
//                                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                                     .map((user, index) => {
//                                         const labelId = `enhanced-tablecheckbox-${index}`

//                                         return (
//                                             <TableRow
//                                                 hover
//                                                 onClick={event => this.handleClick(event, user.name)}
//                                                 role="checkbox"
//                                                 tabIndex={-1}
//                                                 key={user.id}

//                                             >
//                                                 <TableCell component="th" id={labelId} scope="user" padding="none">
//                                                     {user.id}
//                                                 </TableCell>
//                                                 <TableCell align="right">{user.firstName}</TableCell>
//                                                 <TableCell align="right"> {user.lastName}</TableCell>
//                                                 <TableCell align='right'>{user.email}</TableCell>
//                                                 <TableCell align="right">{user.dateOfBirth}</TableCell>
//                                                 <TableCell align="right">{user.gender}</TableCell>
//                                             </TableRow>
//                                         )
//                                     })
//                                 }
//                             </TableBody>
//                         </Table>
//                     </div>
//                     <TablePagination
//                         rowsPerPageOptions={[5, 10, 45]}
//                         component="div"
//                         count={users.length}
//                         rowsPerPage={rowsPerPage}
//                         page={page}
//                         backIconButtonProps={{
//                             'aria-label': 'Previous Page',
//                         }}
//                         nextIconButtonProps={{
//                             'aria-label': 'Next Page',
//                         }}
//                         onChangePage={this.handleChangePage}
//                         onChangeRowsPerPage={this.handleChangeRowsPerPage}
//                     />
//                 </Paper>
//                 <FormControlLabel
//                     control={<Switch checked={dense} onChange={this.handleChangeDense} />}
//                     label="Dense padding"
//                 />
//             </div>
//         )
//     }
// }

export default EnhancedTable
