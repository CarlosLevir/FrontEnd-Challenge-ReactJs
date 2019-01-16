import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Header = () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#home">Febracis</a>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem eventKey={1} href="#">
        <NavLink to="/">Home</NavLink>
      </NavItem>
      <NavItem eventKey={2} href="#">
        <NavLink to="/contact">Contact</NavLink>
      </NavItem>
    </Nav>
  </Navbar>
);

export default Header;
