import React, { Component } from 'react';
import "./NavContainer.css";
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

export default class NavContainer extends Component {
    render() {
        return (
            <List component="nav" >
                <ListItem component="div">
                    <ListItemText inset>
                        <Typography>
                            
                        </Typography>
                    </ListItemText>
                </ListItem>
            </List>
        )
    }
}
