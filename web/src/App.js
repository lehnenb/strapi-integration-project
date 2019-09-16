import React from 'react';
import logo from './logo.svg';
import Home from './Home';
import Nursery from './Nursery';
import Voluntary from './Voluntary';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

function App() {
  return (
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/addHome" component={Nursery} />
        <Route path="/addVoluntary" component={Voluntary} />
      </Router>
  );
}

export default App;
