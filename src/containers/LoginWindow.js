import React from "react";
import { Link } from 'react-router-dom';
import LoginBox from "../components/LoginBox";
import Button from "../components/Button";

import "../styles/LoginRegisterWindow.scss";

export default function LoginWindow(){

    return(
        <div className="Window">

            <div className="WindowForm">

            <form className="Form">
                <div className="form">
                    <LoginBox name="login" type="text"/>
                    <LoginBox name="hasło" type="password"/>
                </div>
                <Button name="zaloguj"/>
                <span className="Register">
                    <Link to="register">dołącz do nas!</Link>
                </span>
            </form>

            <div className="LoginMessage">
                <span> </span>
            </div>
            </div>
        </div>
    )
}
