import React, { Component } from 'react';
import Header from './Header';
import "./bootstrap.min.css";
import "./app.css";

class Layout extends Component {
  render(){
    return <div> <Header />
      <div className="container">
        {this.props.children}
      </div>
    </div>
  }
}
export default Layout;
