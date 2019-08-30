import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1)
    }
}));

export const UserInfoContainer = ({ users }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles();

    const handleClick = event => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const findLoggedInUser =
        users.length === 0
            ? undefined
            : users.find(
                  ({ id }) =>
                      Number(window.localStorage.getItem('userId')) === id
              );

    const loggedInUser =
        typeof findLoggedInUser === 'undefined'
            ? ''
            : `${findLoggedInUser.firstName} ${findLoggedInUser.lastName}`;

    return users.length === 0 ? (
        <></>
    ) : (
        <>
            <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                aria-controls="simple-menu"
                onClick={handleClick}
            >
                {loggedInUser}
            </Button>
            <Menu
                id="menu"
                keepMounted
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem component={Link} to="/logout" onClick={handleClose}>
                    Logout
                </MenuItem>
            </Menu>
        </>
    );
};

const mapStateToProps = ({ users }) => ({ users });

// Export the connected component
export default connect(mapStateToProps)(UserInfoContainer);
