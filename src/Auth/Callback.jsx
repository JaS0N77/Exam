import React from "react";
import oauthClient from "./oauthClient";

const Callback = () => {
    oauthClient.getToken().then((token) => {
        localStorage.setItem("oauthToken", token.access_token);
        window.location.href = "/protected";
    });

    return <div>Authenticating...</div>;
};

export default Callback;
