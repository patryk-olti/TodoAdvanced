import React from 'react';
import RegisterWindow from '../containers/RegisterWindow';
import Message from '../containers/LoginRegisterMessage';

import "../styles/LoginRegisterPage.scss";

const RegisterPage = () => {

    return(
        <div className="Page">
            <Message hello="okno rejestracji" second="prosimy uzupełnić dane . . ."/>
            <RegisterWindow />
        </div>
    )
}

export default RegisterPage;