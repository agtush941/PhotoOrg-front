import React, { Component } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import LogOut from "../LogOut";
import { NavLink } from "react-router-dom";




class Navbarcon extends Component {
  render() {
    return (
      <>
        <Navbar bg="dark" expand="lg" sticky="top">
          <Container>
            <Navbar.Brand href="/">
              <bold>PhotoOrg</bold>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="justify-content-end" variant="tabs">
                <Nav.Link as={NavLink} to={(sessionStorage.getItem('usertoken') === null?"/":"/UserHome")}>
                  Home
                  
                </Nav.Link>
                <Nav.Link as={NavLink} to="/Reg">
                  Register
                </Nav.Link>
                {(sessionStorage.getItem('usertoken') !== null?null:(
                <Nav.Link as={NavLink} to="/Login">
                  Login
                </Nav.Link>))}
              </Nav>
            </Navbar.Collapse>

            <LogOut />
          </Container>
        </Navbar>
      </>
    );
  }
}

export default Navbarcon;
