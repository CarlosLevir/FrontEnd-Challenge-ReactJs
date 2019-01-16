import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HomePage from './containers/HomePage';
import Contact from './containers/ContactPage';

const AppRouter = () => (
  <Router>
    <div>
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Febracis</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Nav>
          <NavItem>
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem>
            <Link to="/contact/">About</Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Route path="/" exact component={HomePage} />
      <Route path="/contact" component={Contact} />
    </div>
  </Router>
);

export default AppRouter;
