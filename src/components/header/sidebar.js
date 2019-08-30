import React from "react";
import { slide as Menu } from "react-burger-menu";
import UserInfoContainer from '../auth/user-info/UserInfoContainer';
import NavContainer from '../nav/NavContainer';

export default props => {
  return (
    // Pass on our props
    <Menu {...props}>
      <NavContainer />
      <UserInfoContainer />
    </Menu>
  );
};
