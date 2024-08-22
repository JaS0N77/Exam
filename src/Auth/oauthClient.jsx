import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "../App";

const googleOAuthConfig = {
    clientId:
        "1065900059215-q1lrvpkhsr7d65h2mhd00lqrq557apqc.apps.googleusercontent.com",
    redirectUri: "http://localhost:3000/callback",
    scope: ["profile", "email"],
};

const AppWrapper = () => {
    return (
        <GoogleOAuthProvider clientId={googleOAuthConfig.clientId}>
            <App />
        </GoogleOAuthProvider>
    );
};

export default AppWrapper;
