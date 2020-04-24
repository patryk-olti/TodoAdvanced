import React from "react";

import LoginWindow from '../containers/LoginWindow';
import Message from '../containers/LoginRegisterMessage';

import "../styles/LoginRegisterPage.scss";

const LoginPage = () => {
    
    return(
        <div className="Page">
            <Message hello={"Witamy w aplikacji monitorującej postępy nauki" }second="prosimy zalogować się do systemu . . ."/>
            <LoginWindow />

        </div>
    )
}


export default LoginPage;