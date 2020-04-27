import React from "react";
import { Link, Redirect } from 'react-router-dom';
import LoginBox from "../components/LoginBox";
import Button from "../components/Button";

import "../styles/LoginRegisterWindow.scss";

class LoginWindow extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            users: [],
            permission: false,
            loginTemporary: "",
            passwordTemporary: "",
            errorMessage: ""
        }
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

    handleClick = () => {
        this.state.users.forEach(item => {
            if(item.login === this.state.loginTemporary && item.password === this.state.passwordTemporary){
                this.props.changePerm();
                this.setState({
                    loginTemporary: "",
                    passwordTemporary: "",
                    errorMessage: "",
                    permission: true
                })
            }
        })

        this.setState({
            loginTemporary: "",
            passwordTemporary: "",
            errorMessage: "błędny login lub hasło!"
        })
    }

    componentDidMount(){
        fetch('usersList.json')
        .then(response => response.json())
        .then(data => {
            this.setState({
                users: data.users
            })
        })
    }

    render(){
        //console.log(this.state.users);
        //console.log(`zezwolenie: ${this.state.permission}`)
        console.log(this.props.perm);

        return(
            <div className="Window"> 
                {this.state.permission ? <Redirect to="/home" /> : null}

                <span>{this.props.perm} </span>

                <div className="WindowForm">
                    <div className="Form">
                        <div className="form">
                            <LoginBox name="login" value={this.state.loginTemporary} handleChange={this.handleChangeLogin} type="text" />
                            <LoginBox name="hasło" value={this.state.passwordTemporary} handleChange={this.handleChangePassword} type="password"/>
                        </div>
                        <Button name="zaloguj" handleClick={this.handleClick} />

                        <span className="Register">
                            <Link to="register">dołącz do nas!</Link>
                        </span>
                    </div>

                    <div className="LoginMessage">
                        <span>{this.state.errorMessage}</span>
                    </div>
                </div>
            </div>
    )}
}

export default LoginWindow;