import React from "react";

import "../styles/LoginRegisterMessage.scss";

export default function LoginWindow(props){

    return(
        <div className="title">
                <span className="helloMessage">{props.hello}</span>
                <span className="loginMessage">{props.second}</span>
        </div>
    )
}


