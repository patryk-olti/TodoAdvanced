import React from "react";

import LoginWindow from '../containers/LoginWindow';
import Message from '../containers/LoginRegisterMessage';

import "../styles/LoginRegisterPage.scss";

const LoginPage = (props) => {
    
    return(
        <div className="Page">
            <Message hello={"Witamy w aplikacji monitorującej postępy nauki" }second="prosimy zalogować się do systemu . . ."/>
            <LoginWindow perm={props.perm} changePerm={props.changePerm}/>

        </div>
    )
}


export default LoginPage;