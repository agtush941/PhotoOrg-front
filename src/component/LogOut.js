import React, { Component } from "react";
import {Navigate} from 'react-router-dom';
import {Button} from "react-bootstrap";

class LogOut extends Component {
    constructor() {
        super()
        this.state = {
          loggedin: true,
        }
    
        this.onClick = this.onClick.bind(this)
      } 

      onClick(e){
          sessionStorage.removeItem('usertoken');
          sessionStorage.removeItem('userData');
          this.setState({
              loggedin:false
          })
      }

    render() {
        if(sessionStorage.getItem('usertoken') === null){
            if(this.state.loggedin){
            return null}
            this.setState({loggedin: true})
            return (<Navigate to= '/' replace={true} />)
        }
        return(
            <Button variant="outline-warning" onClick = {this.onClick}>Log Out</Button>
        )
    }

}

export default LogOut;