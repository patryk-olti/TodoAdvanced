import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import '../styles/App.scss';


class App extends React.Component {

  state = {
    permission: true
  }

  render(){
    return (
    <Router>
      <div className="App">
        <RegisterPage />



      </div>
    </Router>
    
  )}
}

export default App;
