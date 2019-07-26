import React, { Component } from 'react';
import "./NavContainer.css";
import {Menu, MenuItem, Button, ListItemIcon } from '@material-ui/core';

export default function NavContainer(){
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        console.log('set',setAnchorEl)
        setAnchorEl(event.currentTarget)
    }

    function handleClose(){
        console.log('normal', anchorEl)
        setAnchorEl(null)
    }
        return (<div>
            <Button
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
                <MenuItem onClick={handleClose}>Signup      </MenuItem>
                <MenuItem onClick={handleClose}>Log In      </MenuItem>
            </Menu>
        </div>
        )
    }
