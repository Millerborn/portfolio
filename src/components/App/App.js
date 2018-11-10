import React, { Component } from 'react';
import './App.css';
import Portfolio from '../PortfolioPage/PortfolioPage';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Admin from '../AdminView/AdminView';



class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
        <div>
          <h1>Cooper Miller</h1>
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      <Route exact path="/projects" component={Portfolio} />
      <Route path="/admin" component={Admin}/>
      </div>
      </Router>
    );
  }
}

export default App;
