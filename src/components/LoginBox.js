import React from 'react';
import "../styles/LoginRegisterBox.scss";

const LoginBox = (props) => {

    return(
        <label>
            <span>{props.name}: </span>
            <input type={props.type} placeholder={`${props.name}...`}/>
        </label>
    )
}

export default LoginBox;