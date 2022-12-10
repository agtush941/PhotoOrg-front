import React, { Component } from 'react';
import axios from 'axios';
import {Navigate} from 'react-router-dom';

class Reg extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            password: '',
            flag:false,
          errors: {}
        }
    
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
    
      onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
      }
      onSubmit(e) {
        e.preventDefault()
    
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        }
    
        axios.post('http://localhost:3001/user/register', newUser)
          .then(responce => {
            console.log(responce.data);
            return responce.data;
          }) 
          .then(res => {
            if(res === 'email already exist...') {
              this.setState({errors: res})
            }else {
              this.setState({flag:true})
            }
          })
      }
    
      render() {
        return (
            
            <div className="body">
                {this.state.flag && (
          <Navigate to="/Login" replace={true} />
        )}
          <div className="container my-5">
            <div className="row">
              <div className="col-md-6 mt-5 mx-auto">
                <form Validate onSubmit={this.onSubmit} >
                  <h1 className="h3 mb-3 font-weight-normal btn-rg">Register</h1>
                  <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={this.state.name}
                      onChange={this.onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email address</label>
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
                  <div className="form-group">
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
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Register!
                  </button>
                </form>
              </div>
            </div>
          </div>
          
          </div>
        )
      }
}

export default Reg;