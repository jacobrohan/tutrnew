import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Users from './routes/users/index';
import { Route, Switch } from 'react-router-dom';
import Login from './routes/users/login';


class App extends Component {
  render() {
    return (
    <Switch>
      <Route exact path='/' component = {Login} />
      <Route path='/users' component={Users} />
    </Switch>
  )
  }
}

export default App;
