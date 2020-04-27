import React from 'react';
import { Link } from 'react-router-dom';
import LoginBox from '../components/LoginBox';
import Button from '../components/Button';

import '../styles/LoginRegisterWindow.scss';

class RegisterWindow extends React.Component{

    state = {
        nameTemporary: "",
        surnameTemporary: "",
        loginTemporary: "",
        passwordTemporary: ""
    }

    handleChangeName = (e) => {
        this.setState({
            nameTemporary: e.target.value
        })
    }

    handleChangeSurname = (e) => {
        this.setState({
            surnameTemporary: e.target.value
        })
    }

    handleChangeLogin = (e) => {
        this.setState({
            loginTemporary: e.target.value
        })
    }

    handleChangePassword = (e) => {
        this.setState({
            passwordTemporary: e.target.value
        })
    }

    handleClick(){

        let newObj = {
            "id": 5,
            "name": this.state.nameTemporary,
            "surname": this.state.surnameTemporary,
            "login": this.state.loginTemporary,
            "password": this.state.passwordTemporary
        }

        fetch('usersList.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                users: data.users
            })
        })

    }

    render(){
        return(
            <div className="Window">
                <div className="WindowForm">
                    <div className="Form">
                        <div className="form">
                            <LoginBox name="imię" type="text" value={this.state.nameTemporary} handleChange={this.handleChangeName} />
                            <LoginBox name="nazwisko" type="text" value={this.state.surnameTemporary} handleChange={this.handleChangeSurname}/>
                            <LoginBox name="login" type="text" value={this.state.loginTemporary} handleChange={this.handleChangeLogin}/>
                            <LoginBox name="hasło" type="password" value={this.state.passwordTemporary} handleChange={this.handleChangePassword}/>
                        </div>
                        <Button name="zarejestruj się"/>
                        <Link to="/">
                            <Button  name="wstecz" back/>
                        </Link>
                    </div>
                    <div className="LoginMessage">
                        <span> </span>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default RegisterWindow;