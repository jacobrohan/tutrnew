import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { isLoggedIn } from '../../helpers/authentication';
import Login from './login';
import Dashboard from '../../components/Dashboard';
import Register from './register';

class Users extends Component {
  render() {
    return (
      <Switch>
        <Route path="/users/register" component={Register} />

        <Route path="/users/login" component={Login} />
        <Route path="/" render={
          (props) => {
            const isloggedin = localStorage.getItem("token");
            if (isloggedin){
              return <Dashboard />
            } else{
            return <Login />
            }
          }
        }/>
        </Switch>
    );
  }
}

export default Users;
