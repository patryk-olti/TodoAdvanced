import React from 'react';
import LoginBox from '../components/LoginBox';
import Button from '../components/Button';

import '../styles/LoginRegisterWindow.scss';

const RegisterWindow = () => {

    return(
        <div className="Window">
            
            <form className="Form">
                <div className="form">
                    <LoginBox name="imię" type="text"/>
                    <LoginBox name="nazwisko" type="text"/>
                    <LoginBox name="login" type="text"/>
                    <LoginBox name="hasło" type="password"/>
                </div>
                <Button name="zarejestruj się"/>
            </form>

            <div className="LoginMessage">
                <span> </span>
            </div>

        </div>
    )
}

export default RegisterWindow;