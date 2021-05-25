// import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = props => (
  <Router>
    <Switch>
      <Route exact path='/' component={ Homepage } />
    </Switch>
  </Router>
)

export default App;
