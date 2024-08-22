import React from "react";
import oauthClient from "./oauthClient";

const Login = () => {
    const handleLogin = () => {
        oauthClient.authorize();
    };

    return <button onClick={handleLogin}>Login with Google</button>;
};

export default Login;
