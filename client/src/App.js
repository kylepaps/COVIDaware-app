import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import Navigation from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import About from './components/About';
import Team from './components/Team';
import Provinces from './components/Provinces';

function App() {
  return (
    <Router>
        <div>
          <Route exact component={Navigation} />
          <Route path="/" exact component={Home} />
          <Route path="/FAQ" exact component={FAQ} />
          <Route path="/About" exact component={About}/>
          <Route path="/Team" exact component={Team} />
          <Route path="/Provinces/:name" exact component={Provinces} />
        </div>
    </Router>
  );
}

export default App;
