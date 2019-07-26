import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Menu, MenuItem } from '@material-ui/core';

export function UserInfoContainer() {
    const [anchorEl, setAnchorEl] = React.useState(null)

    function handleClick(event) {
        console.log('set', setAnchorEl)
        setAnchorEl(event.currentTarget)
    }

    function handleClose() {
        console.log('normal', anchorEl)
        setAnchorEl(null)
    }

    return (<div>
        <Button
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
            <MenuItem onClick={handleClose}>Logout     </MenuItem>
        </Menu>
    </div>
    )
}

// Export the connected component
export default connect()(UserInfoContainer);