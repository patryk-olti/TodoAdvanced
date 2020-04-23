import React from 'react';
import "../styles/LoginBox.scss";

const LoginBox = (props) => {

    return(
        <label>
            <span>{props.name}: </span>
            <input type={props.type} placeholder={`${props.name}...`}/>
        </label>
    )
}

export default LoginBox;