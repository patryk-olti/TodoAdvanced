import React from "react";
import styled from "styled-components";

const ButtonClick = styled.button`
    position: relative;
    margin: 15px 0;
    padding: 10px 30px;
    font-size: ${props => (props.back ? "12px" : "18px")};
    
    font-weight: 700;
    letter-spacing: 2px;
    color: rgb(116, 139, 9);
    
    text-transform: uppercase;
    background-color: rgb(229, 255, 157);
    border: none;
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;

    &::after{
        content: "";
        width: 100%;
        height: 100%;
        box-sizing: border-box;

        position: absolute;
        top: 0;
        left: 0;
        transform: translate(4px, -4px);
        border: 2px solid black;
        transition: .25s;
    }

    &:hover::after{
        transform: translate(-4px, 4px);
    }
`

const Button = (props) => {

    return(
        <ButtonClick back={props.back}>{props.name}</ButtonClick>
    )
}

export default Button;