import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';

import ErrorPage from './ErrorPage';

import '../styles/App.scss';


class App extends React.Component {

  state = {
    permission: true
  }

  render(){
    return (
    <Router>
      <div className="App">

        <Switch>
          <Route path="/" exact render={() => <LoginPage />} />
          <Route path="/register" component={RegisterPage} />

          <Route component={ErrorPage} />
        </Switch>
      </div>
    </Router>
  )}
}

export default App;
