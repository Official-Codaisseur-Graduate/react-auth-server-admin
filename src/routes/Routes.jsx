import * as React from "react";
import "./Routes.css";
import { Route, Switch } from "react-router-dom";
import HeaderContainer from "./../components/header/HeaderContainer";
import FooterContainer from "./../components/footer/FooterContainer";
import { Callback } from "../components/auth/Callback";
import { Logout } from "../components/auth/Logout";
import { LogoutCallback } from "../components/auth/LogoutCallback";
import { PrivateRoute } from "./PrivateRoute";
import LoginContainer from '../components/login/LoginContainer'
import SignupContainer from "../components/SignUp/SignupContainer";
import { SilentRenew } from "../components/auth/SilentReniew";
import PublicPage from "./../components/PublicPage";
import PrivatePage from "./../components/PrivatePage"
import UserListContainer  from '../components/Users/UserListContainer'
import SignupConfirm from '../components/SignUp/SignupConfirm';
import SampleData from '../components/Sampledata/SampleData'
import ForgetPasswordContainer from '../components/forgetPassword/ForgetPasswordContainer'
import ResetPasswordForm from "../components/forgetPassword/ResetPasswordForm";

export const Routes = (

    <div className="routes-container">
        <HeaderContainer />
        <Switch>
            <Route exact={true} path="/login" component={LoginContainer} />
            <Route exact={true} path="/signin-oidc" component={Callback} />
            <Route exact={true} path="/logout" component={Logout} />
            <Route exact={true} path="/logout/callback" component={LogoutCallback} />
            <Route exact={true} path="/register" component={SignupContainer} />
            <Route exact={true} path="/silentrenew" component={SilentRenew} />
            <Route exact={true} path="/register-conferm" component={SignupConfirm} />
            <Route exact={true} path="/forget-password" component={ForgetPasswordContainer} />
            <Route exact={true} path="/reset/:token" component={ResetPasswordForm} />
            <PrivateRoute path="/dashboard" component={PrivatePage} />
            <Route path="/user-list" component={UserListContainer} />
            <PrivateRoute path='/products' component={SampleData} />
            <Route path="/" component={PublicPage} />
        </Switch>
        <FooterContainer />
    </div>
);