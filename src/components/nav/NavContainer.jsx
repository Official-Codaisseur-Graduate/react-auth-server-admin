import React from 'react';
import "./NavContainer.css";
import { Link } from 'react-router-dom';
import {Menu, MenuItem, Button } from '@material-ui/core';

export default function NavContainer(){
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        setAnchorEl(event.currentTarget)
    }

    function handleClose(){
        setAnchorEl(null)
    }
        return (<div>
            <Button
            varient="outlined" 
            aria-controls="simpl-menu" 
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
                <MenuItem onClick={handleClose}>Log In      </MenuItem>
            </Menu>
        </div>
        )
    }
