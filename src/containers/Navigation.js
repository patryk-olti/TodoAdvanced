import React from 'react';
import Nav from '../components/Nav';
import Input from '../components/Input';

import "../styles/Navigation.scss";

export default function Navigation(){

    return(
        <nav>
            <div className="navBox">
                <div className="about">
                    <span>Witaj!</span>
                    <span>Patryk Oltuch</span>
                </div>
                
                <Input />
                <ul>
                    <Nav name="nowa sekcja" />
                    <Nav name="dziennik aktywności" />
                    <Nav name="koncepcje" />
                    <Nav name="konto" />
                    <Nav name="twórca" />
                    <Nav name="wyloguj" />
                </ul>
            </div>
        </nav>
    )
}