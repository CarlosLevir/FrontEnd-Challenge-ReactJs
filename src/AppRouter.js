import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import HomePage from './containers/HomePage';
import Contact from './containers/ContactPage';
import CommentsPage from './containers/CommentsPage';

const styles = {
  NavItem: {
    padding: 15
  }
};

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
          <NavItem style={styles.NavItem} componentClass="span">
            <Link to="/">Home</Link>
          </NavItem>
          <NavItem style={styles.NavItem} componentClass="span">
            <Link to="/contact">Contact</Link>
          </NavItem>
        </Nav>
      </Navbar>

      <Route path="/" exact component={HomePage} />
      <Route path="/contact" component={Contact} />
      <Route path="/comments" component={CommentsPage} />
    </div>
  </Router>
);

export default AppRouter;
