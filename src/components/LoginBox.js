import React from 'react';
import "../styles/LoginRegisterBox.scss";

const LoginBox = (props) => {

    return(
        <label>
            <span>{props.name}: </span>
            <input type={props.type} placeholder={`${props.name}...`} value={props.value} onChange={props.handleChange} />
        </label>
    )
}

export default LoginBox;