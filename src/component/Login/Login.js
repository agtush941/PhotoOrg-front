import React, { Component } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';


class Login extends Component {
    constructor() {
        super()
        this.state = {
          email: '',
          password: '',
          loggedin: false,
          errors: {},
          sucess:'success'
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      } 
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const user = {
          email: this.state.email,
          password: this.state.password,
          org: 'U'
        }
    
    
        axios.post('http://localhost:3001/user/login', {
          email: user.email,
          password: user.password
        }).then(response => {
          if(response.data === "Email not found" || response.data === "Password is incorrect" ){ 
            this.setState({sucess : response.data});
            return response.data ;}
          
          sessionStorage.setItem('usertoken', response.data)
          console.log(response.data);
          return response.data
        }).then(res => {
          if(res !== "Email not found" && res !== "Password is incorrect") {
            sessionStorage.setItem('userData', JSON.stringify(user));
            this.setState({loggedin: true});
          } 
        }).catch(err => {
          console.log(err)
        })
      }
    
      render() {
        return (
        
          <div className="body">
         {this.state.loggedin && (
          <Navigate to="/UserHome" replace={true} />
        )}
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form Validate onSubmit={this.onSubmit}>
                  <h1 className="h3 mb-3 mt-5 font-weight-normal btn-rg">Please sign in</h1>
                  
                  {this.state.sucess !== 'success' && (
          <h3 className="h3 mb-3 mt-5 font-weight-normal btn-rg">{this.state.sucess}</h3>
          
        )}

                  <div className="form-group btn-rg">
                    <label htmlFor="email" >Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter email"
                      value={this.state.email}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group btn-rg">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                     value={this.state.password}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block mb-5"
                    href = "/patient/login/patient_home"
                  >
                    Sign in
                  </button>
               </form>
              </div>
            </div>
            <div className="reg ml-5"> <h5 className="btn-rg">Don't have any account <a href="/Reg">Register Here</a></h5> </div>
          </div>
          
          </div>  
        )
      }
}

export default Login;