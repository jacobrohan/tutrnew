import React, { Component } from 'react';
import Header from './Header';
import "./bootstrap.min.css";
import "./app.css";
import "./LandingPage.css";


class LandingPage extends Component {
  render(){
    return (
      <div className="page-background">
        <div className="cta container rounded text-center text-white">
                <h1>Teach and Learn</h1>
                <p className="lead p-3">
                    Tutr is worlds first platform for high performing students to get rewarded by their peers for organising peer teaching sessions.
                </p>
                <form action="" method="POST" className="form-inline justify-content-center">
                  <input type="email" name="email" className="form-control form-control-lg mr-2" placeholder="Enter your email..." />
                  <input type="password" name="password" className="form-control form-control-lg mr-2" placeholder="Password" />
                  <button type="submit" className="btn btn-lg btn-primary">Sign in</button>
                  </form>
                <p className="lead p-1">
                    <font size="2">New user? Sign up here</font>
                </p>
            </div>
      </div>
  )}
}
export default LandingPage;
