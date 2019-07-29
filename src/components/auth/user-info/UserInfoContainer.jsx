import React from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem } from '@material-ui/core';

import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}))

export function UserInfoContainer() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }

    return (<div>
        <Button variant="outlined"
            color="primary"
            className={classes.button}
            aria-controls="simple-menu"
            onClick={handleClick}
        >
            Billy Vlachos
            </Button>
        <Menu id="menu"
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem component={Link} to="/logout" onClick={handleClose}> Logout</MenuItem>
        </Menu>
    </div>
    )
}

// Export the connected component
export default connect()(UserInfoContainer);