import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

/**
 * logout: This component is going to logout the user.
 */
export const Logout = () => (
    <AuthConsumer>
        {({ logout }) => {
            logout();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);