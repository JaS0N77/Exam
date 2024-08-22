import React from "react";
import { Redirect, Route } from "react-router-dom";
import oauthClient from "../oauthClient";

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const token = localStorage.getItem("oauthToken");

    if (!token) {
        return <Redirect to="/login" />;
    }

    return <Route {...rest} render={(props) => <Component {...props} />} />;
};

export default ProtectedRoute;
