import React from "react";
import { AuthConsumer } from "../../providers/authProvider";

/**
 * silentRenew: Is going to be used by the event 
 * addAccessTokenExpired configured on the AuthService.
 */
export const SilentRenew = () => (
    <AuthConsumer>
        {({ signinSilentCallback }) => {
            signinSilentCallback();
            return <span>loading</span>;
        }}
    </AuthConsumer>
);
