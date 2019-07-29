import React from 'react';
import "./NavContainer.css";
import { Link } from 'react-router-dom';
import { Menu, MenuItem, Button } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles'

const useStyles= makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
    }
}))

export default function NavContainer() {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        setAnchorEl(null)
    }
    return (<div>
        <Button
            variant="outlined"
            color="primary"
            className={classes.button}
            aria-controls="simple-menu"
            onClick={handleClick}
        >
            Menu
            </Button>
        <Menu id="menu"
            keepMounted
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem component={Link} to={"/register"} onClick={handleClose}>Signup</MenuItem>
            <MenuItem component={Link} to="/login" onClick={handleClose}>Log In </MenuItem>
        </Menu>
    </div>
    )
}
