// import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const App = props => (
  <Switch>
    <Route exact path='/' component={ LandingPage } />
  </Switch>
)

export default App;
