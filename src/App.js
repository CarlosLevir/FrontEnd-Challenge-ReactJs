import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './containers/HomePage';
import Contact from './containers/ContactPage';

const App = () => (
  <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/contact" component={Contact} />
    </Switch>
  </div>
);
export default App;
