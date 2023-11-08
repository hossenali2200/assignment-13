// src/App.js
// src/App.js
import React, { useRef, useState, useEffect } from 'react';
 
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Service from './Service';
import About from './About';
import Project from './Project';
import Blog from './Blog';
import Contact from './Contact';

function App() {

  const inputRef = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Perform side effects or data fetching here
  }, []); // Empty dependency array to run the effect only once

  const handleIncrement = () => {
    setCount(count + 1);
  };
  return (
    <Router>
      <nav>
        <NavLink to="/" activeClassName="active">Home</NavLink>
        <NavLink to="/service">Service</NavLink>
      <input type="text" ref={inputRef} placeholder="Input Element" />
      <button onClick={handleIncrement}>Increment</button>
      <p>Count: {count}</p>
    
        <NavLink to="/about" activeClassName="active">About</NavLink>
        <NavLink to="/project" activeClassName="active">Project</NavLink>
        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
      </nav>
      <Switch>
        <Route path="/service" component={Service} />
        <Route path="/about" component={About} />
        <Route path="/project" component={Project} />
        <Route path="/blog" component={Blog} />
        <Route path="/contact" component={Contact} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
