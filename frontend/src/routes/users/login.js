import React, { Component } from 'react';
import ErrorBox from '../../components/ErrorBox';
import Layout from '../../components/Layout';
import { Redirect } from 'react-router';
import { loginRequest } from '../../helpers/network';
import { Link } from 'react-router-dom';
import { saveUser } from '../../helpers/authentication';

class Login extends Component {
  state = {
    error: null,
    success: null
  }
  updateVal = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  submitForm = async (e) => {
    e.preventDefault();
    try {
        const response = await loginRequest({email: this.state.email, password: this.state.password});
        saveUser(response);
        console.log(response);
        this.setState({
          token: response.token,
          loginSuccess: response.success
        });
    } catch (e) {
        this.setState({
          error: e.email
        })
    }
  }
  render(){
    return (
       <div className="page-background">
       {this.state.error && <ErrorBox msg = {this.state.error} />}
       {this.state.loginSuccess && <Redirect to="/users/" />}
       <div className="cta container rounded text-center text-white">
              <h1>Teach and Learn</h1>
              <p className="lead p-3">
                  Tutr is worlds first platform for high performing students to get rewarded by their peers for organising peer teaching sessions.
              </p>
              <form onsSubmit={this.submitForm} className="form-inline justify-content-center">
                <input type="email" name="email" onChange={this.updateVal} className="form-control form-control-lg mr-2" placeholder="Enter your email..." />
                <input type="password" name="password" onChange={this.updateVal} className="form-control form-control-lg mr-2" placeholder="Password" />
                <Link to='/users/dashboard'>
                <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                </Link>
                </form>
              <p className="lead p-1">
              <Link to='/users/register'>
                  <font size="2">New user? Sign up here</font>
              </Link>
              </p>
          </div>
    </div>
    )
  }
}
export default Login;
