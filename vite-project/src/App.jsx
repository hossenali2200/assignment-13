// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="./service" activeClassName="active">Service</NavLink>
        <NavLink to="./about" activeClassName="active">About</NavLink>
        <NavLink to="./project" activeClassName="active">Project</NavLink>
        <NavLink to="./blog" activeClassName="active">Blog</NavLink>
        <NavLink to="./contact" activeClassName="active">Contact</NavLink>
      </nav>
      <Switch>
        <Route path="./service" component={Service} />
        <Route path="./about" component={About} />
        <Route path="./project" component={Project} />
        <Route path="./blog" component={Blog} />
        <Route path="./contact" component={Contact} />
        <Route path="./" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
