import * as React from "react";
import { Route, Switch } from "react-router-dom";


import { Callback } from "../components/auth/Callback";
import { Logout } from "../components/auth/Logout";
import { LogoutCallback } from "../components/auth/LogoutCallback";
import { PrivateRoute } from "./PrivateRoute";
import { SignupContainer } from "../components/SignUp/SignupContainer";
import { SilentRenew } from "../components/auth/SilentRenew";
import { PublicPage } from "../components/publicPage"
import { PrivatePage } from "../components/PivatePage"


export const Routes = (
    <Switch>
        <Route exact={true} path="/signin-oidc" component={Callback} />
        <Route exact={true} path="/logout" component={Logout} />
        <Route exact={true} path="/logout/callback" component={LogoutCallback} />
        <Route exact={true} path="/register" component={SignupContainer} />
        <Route exact={true} path="/silentrenew" component={SilentRenew} />
        <PrivateRoute path="/dashboard" component={PrivatePage} />
        <Route path="/" component={PublicPage} />
    </Switch>
);