import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

/**
 * logoutCallback: After logout the server is going to 
 * redirect the user to the post_logout_redirect_uri 
 * property of the IDENTITY_CONFIG where the logoutCallback 
 * is going to delete the cookie from the identity server 
 * and the localStorage cleaning the browser, and redirect 
 * the user to the REACT_APP_PUBLIC_URL defined in our .env file
 */
export const LogoutCallback = () => (
    <AuthConsumer>
        {({ signoutRedirectCallback }) => {
            signoutRedirectCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);