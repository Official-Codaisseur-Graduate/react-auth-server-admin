import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

/**
 * callback: This component is going to be used 
 * after login when the user is going to be 
 * redirected by the server to the redirect_uri 
 * setted on the IDENTITY_CONFIG
 */
export const Callback = () => (
    <AuthConsumer>
        {({ signinRedirectCallback }) => {
            signinRedirectCallback();
            return <span>Users list goes here...</span>;
        }}
    </AuthConsumer>
);
