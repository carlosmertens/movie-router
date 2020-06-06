import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home.js";
import Navbar from "./navbar/Navbar";
import About from "./About.js";
import Help from "./Help";
import Movie from "./Movie";

function App() {
  return (
    <Router>
      <Route path="/" component={Navbar} />
      <div className="App">
        <Route exact path="/" component={Home} />
        <Route exact path="/movie/:movieId" component={Movie} />
        <Route exact path="/about" component={About} />
        <Route exact path="/help" component={Help} />
      </div>
    </Router>
  );
}

export default App;
