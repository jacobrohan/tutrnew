import React, { Component } from 'react';
import Layout from '../../components/Layout';
import { Redirect, Link } from 'react-router-dom';
import { registerRequest } from '../../helpers/network';
import { saveUser } from '../../helpers/authentication';


class Register extends Component {
 state = {
   error: null,
   signedin: null
 }
 updateVal = (e) => {
   this.setState({[e.target.name]: e.target.value})
 }
 submitForm = async(e) => {
   e.preventDefault();
   this.setState({
     error: null
   })
   try {
     let response = await registerRequest({name: this.state.name, email: this.state.email, password: this.state.password});
     saveUser(response);
     this.setState({
       signedin: true
     })
   }catch (e){
     this.setState({
       error: e.email
     })
   }
 }
 render(){
   return (<Layout>
     {this.state.signedin ? <Redirect to="/users/"/> : null}
     <div className="row">
       <div className="col">
         <h1 className="heading">Please Register</h1>
       </div>
     </div>

     {this.state.error ?
       <div className="alert alert-danger" role="alert">
         {this.state.error}
       </div>
     : null }
     <form onSubmit={this.submitForm}>
     <div className="form-group">
       <label htmlFor="exampleInputEmail1">Name</label>
       <input name="name" type="text" onChange={this.updateVal} className="form-control" id="exampleInputName1" aria-describedby="emailHelp" placeholder="Enter name" />
     </div>
     <div className="form-group">
       <label htmlFor="exampleInputEmail1">Email address</label>
       <input name="email" type="email" onChange={this.updateVal} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
       <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
     </div>
     <div className="form-group">
       <label htmlFor="exampleInputPassword1">Password</label>
       <input name="password" onChange={this.updateVal} type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
     </div>
     <button type="submit" className="btn btn-primary">Sign Up</button>
   </form>
   </Layout>)
 }
}
export default Register;
