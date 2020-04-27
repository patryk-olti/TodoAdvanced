import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';

import ErrorPage from './ErrorPage';

import '../styles/App.scss';


class App extends React.Component {

  state = {
    permission: false
  }

  changePerm = () => {
    this.setState({
      permission: true
    })
  }

  render(){
    return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact render={() => <LoginPage perm={this.state.permission} changePerm={this.changePerm} />} />
          <Route path="/register" component={RegisterPage} />
          {this.state.permission ? <Route path="/home" component={HomePage} /> : null}

          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )}
}

export default App;
