import React, { Component } from 'react';

class ErrorBox extends Component {
  render(){
    return <div class="alert alert-danger" role="alert">
  User does not exist
</div>
  }
}

export default ErrorBox;
